import { takeEvery, takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';
import * as actions from './actions';
import * as constants from './constants';
import { api } from '../../services/mockApi';

function* fetchProcessView(action) {
  try {
    const view = api.getProcessView(action.viewName);
    yield put(actions.viewReceived(view));
  } catch (e) {
    yield put(actions.viewFetchFailed(e));
  }
}

function* watchComponentMounted() {
  yield* takeLatest(constants.COMPONENT_MOUNTED, fetchProcessView);
}

function* watchFetchProcessView() {
  yield* takeEvery(constants.FETCH_VIEW_REQUESTED, fetchProcessView);
}

// All sagas to be loaded
export default [
  fetchProcessView,
  watchFetchProcessView,
  watchComponentMounted,
];
