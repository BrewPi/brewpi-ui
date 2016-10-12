/*
 *
 * ProcessView actions
 *
 */

import * as constants from './constants';

export function viewReceived(view) {
  return {
    type: constants.VIEW_RECEIVED,
    view,
  };
}


export function layoutChoosen(layoutId) {
  return {
    type: constants.LAYOUT_CHOSEN,
    layoutId,
  };
}

export function componentMounted(viewName) {
  return {
    type: constants.COMPONENT_MOUNTED,
    viewName,
  };
}

export function stepChosen(stepId) {
  return {
    type: constants.STEP_CHOSEN,
    stepId,
  };
}

export function viewFetchFailed(error) {
  return {
    type: constants.VIEW_FETCH_FAILED,
    error,
  };
}
