import { createSelector } from 'reselect';
import { fromJS, List } from 'immutable';
import { Table } from 'immutable-table';
import { Part } from './components/Part';

const defaultProcessView = fromJS({
  name: '',
  width: 20,
  height: 10,
  showCoordinates: true,
  layouts: [],
  currentLayout: new Table(20, 10), // immutable table
});

const processViewSelector = (state) => state.get('processView') || defaultProcessView;

/**
 * Get the url slug of the current view name
 */
const viewIdSelector = (state, props) => props.params.viewId;

/**
 * Get the view name
 */
const viewNameSelector = createSelector(
  processViewSelector,
  (view) => view.get('name')
);


/**
 * Get the default layout id
 */
const defaultLayoutIdSelector = createSelector(
  processViewSelector,
  (view) => view.get('defaultLayoutId') || 0
);

/**
 * Get showCoordinates setting for the view
 */
const showCoordinatesSelector = createSelector(
  processViewSelector,
  (view) => view.get('showCoordinates')
);

/**
 * Get showGrid setting for the view
 */
const showGridSelector = createSelector(
  processViewSelector,
  (view) => view.get('showGrid')
);

/*
 * Get a list of steps (id and name) sorted by id
 */
const stepsSelector = createSelector(
  processViewSelector,
  (view) => {
    const steps = view.get('steps');
    if (typeof steps !== 'undefined') {
      const sortedSteps = steps.sortBy((step) => step.get('id'));
      return sortedSteps;
    }
    return new List();
  }
);

/*
 * Get active step id. Return undefined when the step does not exist.
 */

const activeStepIdSelector = createSelector(
  processViewSelector,
  stepsSelector,
  (view, steps) => {
    const id = view.get('activeStepId');
    const match = steps.find((obj) => obj.get('id') === id);
    return (typeof match !== 'undefined') ? id : undefined;
  }
);

/*
 * Get data for the currently active step.
 */

const activeStepSelector = createSelector(
  activeStepIdSelector,
  stepsSelector,
  (stepId, steps) => {
    const match = steps.find((obj) => obj.get('id') === stepId);
    return (typeof match !== 'undefined') ? match : undefined;
  }
);

/*
 * Get notes for the currently active step.
 */

const activeStepNotesSelector = createSelector(
  activeStepSelector,
  (step) => {
    const notes = (typeof step !== 'undefined') ? step.get('notes') : new List();
    return new List(notes); // ensure returned type is list
  }
);


/*
 * Get step settings for he active step id
 */
const activeStepSettingsSelector = createSelector(
  activeStepSelector,
  (step) => {
    const settings = (typeof step !== 'undefined') ? step.get('settings') : undefined;
    return settings || new List();// return settings that it contains or empty list when not found
  }
);

/*
 * Get step layout for he active step id
 */
const activeLayoutIdSelector = createSelector(
  defaultLayoutIdSelector,
  activeStepSelector,
  (defaultLayoutId, step) => {
    const layoutId = (typeof step !== 'undefined') ? step.get('layout') : undefined;
    return layoutId || defaultLayoutId;// return settings that it contains or empty list when not found
  }
);

/**
 * Get the active layout (list of parts)
 */
const layoutPartsSelector = createSelector(
  processViewSelector,
  activeLayoutIdSelector,
  (view, layoutId) => view.getIn(['layouts', layoutId, 'parts'])
);

/*
 * Get currently active part settings
 */
const partSettingsSelector = createSelector(
  processViewSelector,
  (view) => view.get('partSettings')
);

/**
 * Get the active layout merged with the parts settings
 */
const layoutPartsAndSettingsSelector = createSelector(
  layoutPartsSelector,
  partSettingsSelector,
  (layout, partSettings) => {
    if (!layout) {
      return undefined;
    }
    if (!partSettings) {
      return layout;
    }
    const partsWithSettings = layout.map((entry) => {
      const partId = entry.getIn(['part', 'id']);
      if (typeof partId === 'undefined') {
        return entry;
      }
      const match = partSettings.find((obj) => obj.get('id') === partId);
      return (match) ? entry.setIn(['part', 'settings'], match.get('settings')) : entry;
    });
    return partsWithSettings;
  }
);

/**
 * get the view dimensions
 */
const dimensionsSelector = createSelector(
  processViewSelector,
  (view) => {
    const dims = {};
    dims.width = view.get('width');
    dims.height = view.get('height');
    return dims;
  }
);

const mergeWithCell = (x, y, table, newCell) => {
  let cell = table.getCell(x, y);
  if (typeof cell === 'undefined') {
    cell = newCell; // cell was empty, just copy content
  } else {
    Object.assign(cell, newCell); // cell was not empty, merge with previous content
  }
  return table.setCell(x, y, cell);
};

// adds content to a cell which is a List. Creates the list if the cell is undefined
const pushToCell = (x, y, table, content) => {
  const oldCell = table.getCell(x, y);
  let newCell;
  if (!List.isList(oldCell)) {
    newCell = new List().push(content); // cell was empty, start new list of parts
  } else {
    newCell = oldCell.push(content); // cell was not empty, append to list
  }
  return table.setCell(x, y, newCell);
};


/**
 * get layout as an immutable table. Each cell contains a list of parts rendered at that coordinate (x,y).
 */
const layoutTableSelector = createSelector(
  processViewSelector,
  dimensionsSelector,
  layoutPartsAndSettingsSelector,
  (view, dims, layout) => {
    let table = new Table(dims.width, dims.height);
    if (layout) {
      layout.forEach((item) => {
        const xx = item.get('x'); // can be a list
        const yy = item.get('y'); // can be a list
        const part = item.get('part');
        const iterx = List.isList(xx) ? xx : new List().push(xx); // use list as is or convert to list
        const itery = List.isList(yy) ? yy : new List().push(yy);
        for (const x of iterx) {
          if ((x >= 0 && x < dims.width)) {
            for (const y of itery) {
              if ((y >= 0 && y < dims.height)) {
                table = pushToCell(x, y, table, part);
              }
            }
          }
        }
      });
    }
    return table;
  }
);

/**
 * get a table of possible flows for each tile.
 */
const possibleFlowTableSelector = createSelector(
  layoutTableSelector,
  (layoutTable) => {
    const width = layoutTable.width;
    const height = layoutTable.height;
    let flowTable = new Table(width, height);
    for (let x = 0; x < width; x += 1) {
      for (let y = 0; y < height; y += 1) {
        const parts = layoutTable.getCell(x, y);
        if (parts) {
          for (const part of parts) {
            const flows = Part.acceptsFlows(part);
            const liquid = part.getIn(['settings', 'liquid']);
            if (flows.constructor === Array) {
              // flows can be an Array[] or Array[][]
              // for components that span multiple blocks
              let dy = 0;
              let dx = 0;
              for (const obj of flows) {
                if (obj.constructor === Array) {
                  // flows is Array[][]
                  for (const innerObj of obj) {
                    if (innerObj.s !== undefined && liquid !== undefined) {
                      innerObj.liquid = liquid;
                    }
                    flowTable = mergeWithCell(x + dx, y + dy, flowTable, innerObj);
                    dx += 1;
                    if (x + dx >= width) {
                      break;
                    }
                  }
                  dy += 1;
                  dx = 0;
                  if (y + dy >= height) {
                    break;
                  }
                } else {
                  // flows is Array[]
                  if (obj.s !== undefined && liquid !== undefined) {
                    obj.liquid = liquid;
                  }
                  flowTable = mergeWithCell(x + dx, y, flowTable, obj);
                  dx += 1;
                  if (x + dx >= width) {
                    break;
                  }
                }
              }
            } else {
              // flows is a single object
              if (flows.s !== undefined && liquid !== undefined) {
                flows.liquid = liquid;
              }
              flowTable = mergeWithCell(x, y, flowTable, flows);
            }
          }
        }
      }
    }
    return flowTable;
  }
);

const getNeighbour = (x, y, edge, width, height) => {
  let returnVal;
  switch (edge) {
    case 'l':
      returnVal = { x: x - 1, y, edge: 'r' };
      break;
    case 'r':
      returnVal = { x: x + 1, y, edge: 'l' };
      break;
    case 't':
      returnVal = { x, y: y - 1, edge: 'b' };
      break;
    case 'b':
      returnVal = { x, y: y + 1, edge: 't' };
      break;
    case 'k':
      returnVal = { x, y, edge: 'k' };
      break;
    default:
      returnVal = false;
  }
  if (returnVal.x < 0 || returnVal.x >= width || returnVal.y < 0 || returnVal.y >= height) {
    return false;
  }
  return returnVal;
};

/**
 * get a table of actual flows for each tile by recursively following possible flows,
 * starting at each source, ending in a sink.
 */
const flowTableSelector = createSelector(
  possibleFlowTableSelector,
  (possibleFlowTable) => {
    const width = possibleFlowTable.width;
    const height = possibleFlowTable.height;
    let actualFlowTable = new Table(width, height);
    for (let x = 0; x < width; x += 1) {
      for (let y = 0; y < height; y += 1) {
        const tileFlow = possibleFlowTable.getCell(x, y);
        if (tileFlow !== undefined && tileFlow.s !== undefined && tileFlow.liquid !== undefined) { // this tile is a source, start an expanding flow path from here
          let pressure = 0;
          if (tileFlow.pressure) {
            pressure = tileFlow.presure;
          }
          const expanded = expandFlow(x, y, 's', tileFlow.liquid, pressure, possibleFlowTable, actualFlowTable);
          actualFlowTable = expanded.flow;
        }
      }
    }
    return actualFlowTable;
  }
);

function extractPressureDiff(edgesAndPressure) {
  const outEdgesMinusReplaced = edgesAndPressure.replace('-', '+-');
  const split = outEdgesMinusReplaced.split('+');
  const edges = split[0];
  let pressureDiff = 0;
  if (split.length > 1) {
    pressureDiff = parseInt(split[1], 10);
  }
  return { edges, pressureDiff };
}


const expandFlow = (x, y, inEdge, liquid, pressure, possibleFlowTable, actualFlowTable) => {
  const possibleFlow = possibleFlowTable.getCell(x, y) || {};
  const outEdgesString = possibleFlow[inEdge];
  if (typeof outEdgesString === 'undefined') {
    return { flow: actualFlowTable, flowing: false }; // no flow possible, leave actual flow table unchanged
  }
  // check for conflicts (existing outflows match this inflow)
  // this prevents loops
  let conflict = '';
  let loop = '';
  const currentCell = actualFlowTable.getCell(x, y);
  if (typeof currentCell !== 'undefined') {
    for (const existingFlow of currentCell) {
      const existingLiquid = existingFlow.liquid;
      for (const [existingInEdge, exitingOutEdges] of Object.entries(existingFlow.dir)) {
        if (existingInEdge === inEdge && inEdge !== 'k') { // kettle flow is an exception
          conflict += inEdge;
        }
        for (const outEdge of exitingOutEdges) {
          if (outEdge === inEdge && inEdge !== 'k') {
            if (existingLiquid === liquid) {
              loop += inEdge;
            } else {
              conflict += inEdge;
            }
          }
        }
      }
    }
  }
  let newActualFlowTable = actualFlowTable;
  let flowing = false;
  let flowingOutEdges = '';
  const extracted = extractPressureDiff(outEdgesString);
  const outEdges = extracted.edges;
  const pressureDiff = extracted.pressureDiff;
  const newCell = { dir: {}, liquid: {} };
  newCell.dir[inEdge] = outEdges;
  newCell.liquid = liquid;
  if (conflict) {
    console.warn(`Conflict in tile [${x}, ${y}] on edge(s) ${conflict}!`); // eslint-disable-line no-console
  } else if (loop) {
    if (inEdge !== 'k') {
      console.warn(`Loop in tile [${x}, ${y}] on edge(s) ${loop}!`); // eslint-disable-line no-console
    }
  } else { // only continue recursion when there are no conflicts or loops
    newActualFlowTable = pushToCell(x, y, newActualFlowTable, newCell);
    for (const edge of outEdges) {
      const neighbour = getNeighbour(x, y, edge, possibleFlowTable.width, possibleFlowTable.height);
      let flowingToNeighbour = false;
      if (neighbour) {
        const newPressure = pressure + (neighbour.y - y) + pressureDiff;
        if (newPressure >= 0) {
          const expanded = expandFlow(neighbour.x, neighbour.y, neighbour.edge, liquid, newPressure, possibleFlowTable, newActualFlowTable);
          newActualFlowTable = expanded.flow;
          flowingToNeighbour = expanded.flowing;
        }
      }
      const isSink = edge === 's';
      const flowOnThisEdge = flowingToNeighbour || isSink;
      flowing = flowing || flowOnThisEdge;
      flowingOutEdges = (flowOnThisEdge) ? flowingOutEdges + edge : flowingOutEdges;
    }
  }
  if (flowing) {
    // update cell with what is actually flowing
    let cell = newActualFlowTable.getCell(x, y);
    const index = cell.findIndex((f) => f.dir === newCell.dir);
    if (index >= 0) {
      cell = cell.update(index, (f) => {
        const f2 = f;
        f2.flowing = inEdge + flowingOutEdges.toUpperCase();
        return f2;
      });
      newActualFlowTable = newActualFlowTable.setCell(x, y, cell);
    }
  }
  return { flow: newActualFlowTable, flowing };
};


export {
  processViewSelector,
  viewIdSelector,
  viewNameSelector,
  activeLayoutIdSelector,
  layoutPartsSelector,
  partSettingsSelector,
  showCoordinatesSelector,
  showGridSelector,
  dimensionsSelector,
  layoutTableSelector,
  possibleFlowTableSelector,
  flowTableSelector,
  stepsSelector,
  activeStepIdSelector,
  activeStepSettingsSelector,
  activeStepNotesSelector,
};
