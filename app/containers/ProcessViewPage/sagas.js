import { call, put } from 'redux-saga/effects';
import * as actions from './actions';
import { mockApi as api } from '../../services/mockApi';


export function* getAllProcessViews() {
  const processViews = yield call(api.getprocessViews);
  yield put(actions.receiveLayouts(processViews));
}

// All sagas to be loaded
export default [
  getAllProcessViews,
];
