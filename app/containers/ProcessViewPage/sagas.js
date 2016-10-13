import { takeLatest } from 'redux-saga';
import { put, select } from 'redux-saga/effects';
import * as actions from './actions';
import * as constants from './constants';
import { api } from '../../services/mockApi';
import { activeStepSettingsSelector } from './selectors';

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


// All sagas to be loaded
export default [
  watchFetchProcessView,
  watchStepSelected,
];
