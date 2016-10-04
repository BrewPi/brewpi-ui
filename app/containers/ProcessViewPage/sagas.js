import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import {
  COMPONENT_LOADED,
} from './constants';
import { api } from '../../services/mockApi';

function* fetchProcessView(fetchData) {
  const view = yield call(api.getprocessView(fetchData.viewId));
  yield put(actions.viewReceived(view));
}

export function* watchProcessViewLoading() {
  yield takeEvery(COMPONENT_LOADED, fetchProcessView);
}

// All sagas to be loaded
export default [
  fetchProcessView,
  watchProcessViewLoading,
];
