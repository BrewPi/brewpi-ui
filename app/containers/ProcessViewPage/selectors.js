/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "props" }] */

import { createSelector } from 'reselect';
import { fromJS, List } from 'immutable';
import { Table } from 'immutable-table';


const defaultProcessView = fromJS({
  name: '',
  rows: 20,
  cols: 10,
  showCoordinates: false,
  layouts: [],
  currentLayout: new Table(20, 10), // immutable table
});

/**
 * Get settings for a specific processView
 */
const viewSelector = (state, props) => {
  const id = fromJS(props).getIn(['params', 'viewId']); // id passed in by react-router
  const view = state.getIn(['processViews', id]);
  return view || defaultProcessView;
};


const makeViewSelector = (state, props) => createSelector(
  viewSelector,
  (view) => view
);

/**
 * Get the active layout id
 */
const activeLayoutIdSelector = createSelector(
  viewSelector,
  (view) => view.get('currentLayoutId')
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
 * get layout as an immutable table
 */
const layoutTableSelector = createSelector(
  viewSelector,
  dimensionsSelector,
  activeLayoutPartsSelector,
  (view, dims, layout) => {
    let table = new Table(dims.width, dims.height);
    if (layout != null) {
      layout.forEach((item) => {
        const xx = item.get('x'); // can be list
        const yy = item.get('y'); // can be list
        const iterx = List.isList(xx) ? xx : new List().push(xx);
        const itery = List.isList(yy) ? yy : new List().push(yy);
        const part = item.get('part');
        for (const x of iterx) {
          for (const y of itery) {
            table = table.setCell(x, y, part);
          }
        }
      });
    }
    return table;
  }
);

export {
  makeViewSelector,
  activeLayoutIdSelector,
  activeLayoutPartsSelector,
  dimensionsSelector,
  layoutTableSelector,
};
