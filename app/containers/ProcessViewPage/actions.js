/*
 *
 * ProcessView actions
 *
 */

import * as constants from './constants';

export function viewFetchRequested(viewId) {
  return {
    type: constants.VIEW_FETCH_REQUESTED,
    viewId,
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

export function stepSelected(stepId) {
  return {
    type: constants.STEP_SELECTED,
    stepId,
  };
}

export function valveClicked(valveId, oldPos) {
  return {
    type: constants.VALVE_CLICKED,
    valveId,
    oldPos,
  };
}

export function powerTogglableClicked(partId, oldPower) {
  return {
    type: constants.POWER_TOGGLABLE_CLICKED,
    partId,
    oldPower,
  };
}


export function activeStepChanged(stepId) {
  return {
    type: constants.ACTIVE_STEP_CHANGED,
    stepId,
  };
}

export function newPartSettingsReceived(partSettings) {
  return {
    type: constants.NEW_PART_SETTINGS_RECEIVED,
    partSettings,
  };
}

export function layoutChoosen(layoutId) {
  return {
    type: constants.LAYOUT_CHOSEN,
    layoutId,
  };
}

export function gridToggled(oldValue) {
  return {
    type: constants.GRID_TOGGLED,
    oldValue,
  };
}

export function coordinatesToggled(oldValue) {
  return {
    type: constants.COORDINATES_TOGGLED,
    oldValue,
  };
}
