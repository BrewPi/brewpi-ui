import { takeLatest, call, put } from 'redux-saga/effects';

// Individual exports for testing
export function* fetchLayout() {
  try {
    const layout = yield call(fetch, './sample-data/sample-layout.json');
    yield put({ type: 'LAYOUT_FETCH_SUCCEEDED', layout });
  } catch (e) {
    yield put({ type: 'LAYOUT_FETCH_FAILED' }, { message: e.message });
  }
}

/*
  takeLatest does not allow concurrent fetches of layout. If "FETCH_LAYOUT_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* fetchLayoutSaga() {
  yield* takeLatest('LAYOUT_FETCH_REQUESTED', fetchLayout);
}


// All sagas to be loaded
export default [
  fetchLayoutSaga,
];
