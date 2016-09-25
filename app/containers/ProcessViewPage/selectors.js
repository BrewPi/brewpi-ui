/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "props" }] */

import { createSelector } from 'reselect';
import { Table } from 'immutable-table';


const defaultProcessView = {
  id: -1,
  name: '',
  rows: 20,
  cols: 10,
  showCoordinates: false,
  layouts: [],
  currentLayout: new Table(20, 10), // immutable table
};

/**
 * Get settings for a specific processView
 */
const viewSelector = (state, props) => {
  let view = defaultProcessView;
  if (props && props.processViewId) {
    view = state.getIn(['processViews', props.viewId]);
  }
  return view;
};

const makeViewSelector = (state, props) => createSelector(
  viewSelector,
  (view) => (view)
);

/**
 * Get the current layout to render on the process view page
 */

const currentLayoutSelector = (state, props) => createSelector(
  viewSelector,
  (view) => (view.get('currentLayout'))
);


export {
makeViewSelector,
currentLayoutSelector,
};
