/*
 *
 * processView reducer
 *
 */

import * as constants from './constants';

function viewReducer(state = null, action) {
  let newState;
  switch (action.type) {
    case constants.VIEW_FETCH_SUCCESS:
      newState = action.view; // replace everything
      return newState; // replace entire view with new data if not undefined
    case constants.STEP_SELECTED:
      newState = state.set('activeStepId', action.stepId);
      return newState;
    case constants.NEW_PART_SETTINGS_RECEIVED:
      newState = state.set('partSettings', action.partSettings);
      return newState;
    case constants.GRID_TOGGLED:
      newState = state.set('showGrid', !action.oldValue);
      return newState;
    case constants.COORDINATES_TOGGLED:
      newState = state.set('showCoordinates', !action.oldValue);
      return newState;
    default:
      return state;
  }
}

const processViewPageReducer = viewReducer;

export default processViewPageReducer;

