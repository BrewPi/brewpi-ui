import { takeLatest } from 'redux-saga';
import { put, select, fork, take, cancel } from 'redux-saga/effects';
import * as actions from './actions';
import * as constants from './constants';
import { api } from '../../services/mockApi';
import { LOCATION_CHANGE } from 'react-router-redux';
import { activeStepSettingsSelector, partSettingsSelector } from './selectors';

function* fetchProcessView(action) {
  try {
    const view = api.getProcessView(action.viewId);
    yield put(actions.viewFetchSuccess(view));
  } catch (e) {
    yield put(actions.viewFetchFailed(e));
  }
}

function* watchFetchProcessView() {
  yield* takeLatest(constants.VIEW_FETCH_REQUESTED, fetchProcessView);
}

function* onStepSelected(action) {
  yield put(actions.activeStepChanged(action.stepId));
  const newPartSettings = yield select(activeStepSettingsSelector);
  yield put(actions.newPartSettingsReceived(newPartSettings));
}


function* watchStepSelected() {
  yield* takeLatest(constants.STEP_SELECTED, onStepSelected);
}

function* onValveClicked(action) {
  const oldPartSettings = yield select(partSettingsSelector);
  const valveIndex = oldPartSettings.findIndex((p) => p.get('id') === action.valveId);
  if (valveIndex !== -1) {
    const valvePos = action.oldPos;
    const newValvePos = (valvePos === 'open') ? 'closed' : 'open';
    const newPartSettings = oldPartSettings.setIn([valveIndex, 'settings', 'pos'], newValvePos);
    yield put(actions.newPartSettingsReceived(newPartSettings));
  }
}

function* watchValveClicked() {
  yield* takeLatest(constants.VALVE_CLICKED, onValveClicked);
}

/**
 * Root saga manages watcher's lifecycle
 */
export function* processViewSaga() {
  // Fork watcher so we can continue execution
  const valveClickWatcher = yield fork(watchValveClicked);
  const stepSelectedWatcher = yield fork(watchStepSelected);
  const fetchProcessViewWatcher = yield fork(watchFetchProcessView);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(valveClickWatcher);
  yield cancel(stepSelectedWatcher);
  yield cancel(fetchProcessViewWatcher);
}

// All sagas to be loaded
export default [
  processViewSaga,
];
