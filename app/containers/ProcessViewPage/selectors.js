import { createSelector } from 'reselect';
import { fromJS, List } from 'immutable';
import { Table } from 'immutable-table';

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
 * Get the active layout id
 */
const activeLayoutIdSelector = createSelector(
  processViewSelector,
  (view) => view.get('currentLayoutId')
);

/**
 * Get showCoordinates setting for the view
 */
const showCoordinatesSelector = createSelector(
  processViewSelector,
  (view) => view.get('showCoordinates')
);

/**
 * Get the active layout (list of parts)
 */
const activeLayoutPartsSelector = createSelector(
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
const activeLayoutPartsAndSettingsSelector = createSelector(
  activeLayoutPartsSelector,
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


/**
 * get layout as an immutable table. Each cell contains a list of parts rendered at that coordinate (x,y).
 */
const layoutTableSelector = createSelector(
  processViewSelector,
  dimensionsSelector,
  activeLayoutPartsAndSettingsSelector,
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
                const oldCell = table.getCell(x, y);
                let newCell;
                if (!List.isList(oldCell)) {
                  newCell = new List().push(part); // cell was empty, start new list of parts
                } else {
                  newCell = oldCell.push(part); // cell was not empty, append to list
                }
                table = table.setCell(x, y, newCell);
              }
            }
          }
        }
      });
    }
    return table;
  }
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
 * Get step settings for he active step id
 */
const activeStepSettingsSelector = createSelector(
  stepsSelector,
  activeStepIdSelector,
  (steps, id) => {
    const step = steps.find((obj) => obj.get('id') === id); // find first step with matching id
    const settings = (typeof step !== 'undefined') ? step.get('settings') : undefined;
    return settings || new List();// return settings that it contains or empty list when not found
  }
);

export {
  processViewSelector,
  viewIdSelector,
  viewNameSelector,
  activeLayoutIdSelector,
  activeLayoutPartsSelector,
  showCoordinatesSelector,
  dimensionsSelector,
  layoutTableSelector,
  stepsSelector,
  activeStepIdSelector,
  activeStepSettingsSelector,
};
