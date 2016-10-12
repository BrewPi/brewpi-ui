import { createSelector } from 'reselect';
import { fromJS, List, Map } from 'immutable';
import { Table } from 'immutable-table';

const defaultProcessView = fromJS({
  name: '',
  width: 20,
  height: 10,
  showCoordinates: true,
  layouts: [],
  currentLayout: new Table(20, 10), // immutable table
});

const processViewSelector = (state) => state.get('processView') || fromJS({});

/**
 * Get the url slug of the current view name
 */
const viewSlugSelector = (state, props) => props.params.viewName;

/**
 * Get the current view
 */
const viewSelector = createSelector(
  processViewSelector,
  (pview) => {
    const view = pview.get('view');
    return view || defaultProcessView;
  }
);

/**
 * Get the active layout id
 */
const activeLayoutIdSelector = createSelector(
  viewSelector,
  (view) => view.get('currentLayoutId')
);

/**
 * Get showCoordinates setting for the view
 */
const showCoordinatesSelector = createSelector(
  viewSelector,
  (view) => view.get('showCoordinates')
);

/**
 * Get the active layout (list of parts)
 */
const activeLayoutPartsSelector = createSelector(
  viewSelector,
  activeLayoutIdSelector,
  (view, layoutId) => view.getIn(['layouts', layoutId, 'parts'])
);

/**
 * get the view dimensions
 */
const dimensionsSelector = createSelector(
  viewSelector,
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
  viewSelector,
  dimensionsSelector,
  activeLayoutPartsSelector,
  (view, dims, layout) => {
    let table = new Table(dims.width, dims.height);
    if (layout != null) {
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
 * Get a map of step names with id's as key.
 */
const stepsSelector = createSelector(
  viewSelector,
  (view) => new Map(view.get('steps').map((step) => [step.get('id'), step.get('name')]))
);

/*
 * Get active step id
 */
const activeStepIdSelector = createSelector(
  viewSelector,
  (view) => view.get('activeStepId')
);

/*
 * Get step settings for he active step id
 */
const activeStepSettingsSelector = createSelector(
  viewSelector,
  activeStepIdSelector,
  (view, id) => {
    const step = view.get('steps').find((obj) => obj.get('id') === id); // find first step with matching id
    const settings = (step) ? step.get('partSettings') : undefined;
    return settings || new List();// return settings that it contains or empty list when not found
  }
);

export {
  viewSlugSelector,
  viewSelector,
  activeLayoutIdSelector,
  activeLayoutPartsSelector,
  showCoordinatesSelector,
  dimensionsSelector,
  layoutTableSelector,
  stepsSelector,
  activeStepIdSelector,
  activeStepSettingsSelector,
};
