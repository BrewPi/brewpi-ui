import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';
import * as actions from './actions';
import * as constants from './constants';
import { api } from '../../services/mockApi';

function* fetchProcessView(action) {
  try {
    const view = api.getProcessView(action.viewName);
    yield put(actions.viewFetchSuccess(view));
  } catch (e) {
    yield put(actions.viewFetchFailed(e));
  }
}

function* watchFetchProcessView() {
  yield* takeLatest(constants.VIEW_FETCH_REQUESTED, fetchProcessView);
}

// All sagas to be loaded
export default [
  fetchProcessView,
  watchFetchProcessView,
];
