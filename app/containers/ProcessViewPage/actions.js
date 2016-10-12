/*
 *
 * ProcessView actions
 *
 */

import * as constants from './constants';

export function viewFetchRequested(viewName) {
  return {
    type: constants.VIEW_FETCH_REQUESTED,
    viewName,
  };
}

export function viewFetchSuccess(view) {
  return {
    type: constants.VIEW_FETCH_SUCCESS,
    view,
  };
}

export function viewFetchFailed(error) {
  return {
    type: constants.VIEW_FETCH_FAILED,
    error,
  };
}

export function stepChosen(stepId) {
  return {
    type: constants.STEP_CHOSEN,
    stepId,
  };
}


export function layoutChoosen(layoutId) {
  return {
    type: constants.LAYOUT_CHOSEN,
    layoutId,
  };
}
