import { takeLatest, delay } from 'redux-saga';
import { take, put, select, fork, cancel } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from './actions';
import * as constants from './constants';
import { api } from '../../services/mockApi';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  activeStepSettingsSelector,
  partSettingsSelector,
  layoutPartsSelector,
 } from './selectors';

function* fetchProcessView(action) {
  try {
    const view = api.getProcessView(action.viewId);
    yield put(actions.viewFetchSuccess(view));
    if (view.get('activeStepId') === undefined) {
      const firstStep = view.getIn(['steps', 0, 'id']);
      if (firstStep !== undefined) {
        yield put(actions.stepSelected(firstStep));
      }
    }
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

function* onStepApplied() {
  const partSettings = yield select(partSettingsSelector);
  const parts = yield select(layoutPartsSelector);
  const motorValves = parts.filter((item) => item.getIn(['part', 'type']) === 'VALVE_MOTOR');
  const slotsToApply = [];
  for (const valve of motorValves) {
    // match setting to valve
    const id = valve.getIn(['part', 'id']);
    const match = partSettings.find((setting) => setting.get('id') === id);
    if (match) {
      const pos = match.getIn(['settings', 'pos']);
      console.log(valve);
      const slot = valve.getIn(['part', 'options', 'slot']);
      if (slot !== undefined) {
        slotsToApply.push({ pos, slot });
      }
    }
  }
  const evenClose = slotsToApply.filter((slot) => slot.slot % 2 === 0 && slot.pos === 'closed');
  const unevenClose = slotsToApply.filter((slot) => slot.slot % 2 !== 0 && slot.pos === 'closed');
  const evenOpen = slotsToApply.filter((slot) => slot.slot % 2 === 0 && slot.pos === 'open');
  const unevenOpen = slotsToApply.filter((slot) => slot.slot % 2 !== 0 && slot.pos === 'open');
  yield delay(100);
  for (const group of [evenClose, unevenClose, evenOpen, unevenOpen]) {
    console.log(group);
    for (const slot of group) {
      console.log('applying ', JSON.stringify(slot));
      axios.post('http://raspberrypi.local/socketmessage.php',
        `messageType=writeDevice&message={"i":${slot.slot},"w":${slot.pos === 'open' ? 1 : 2}}`
      );
    }
    if (group.length !== 0) {
      yield delay(10000);
    }
  }
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
function* watchStepApplied() {
  yield takeLatest(constants.STEP_APPLIED, onStepApplied);
}

function* watchValveClicked() {
  yield* takeLatest(constants.VALVE_CLICKED, onValveClicked);
}


function* onPowerTogglableClicked(action) {
  const oldPartSettings = yield select(partSettingsSelector);
  const pumpIndex = oldPartSettings.findIndex((p) => p.get('id') === action.partId);
  if (pumpIndex !== -1) {
    const newPower = !action.oldPower;
    const newPartSettings = oldPartSettings.setIn([pumpIndex, 'settings', 'power'], newPower);
    yield put(actions.newPartSettingsReceived(newPartSettings));
  }
}

function* watchPowerTogglableClicked() {
  yield* takeLatest(constants.POWER_TOGGLABLE_CLICKED, onPowerTogglableClicked);
}

/**
 * Root saga manages watcher's lifecycle
 */
export function* processViewSaga() {
  // Fork watcher so we can continue execution
  const valveClickWatcher = yield fork(watchValveClicked);
  const powerTogglableClickWatcher = yield fork(watchPowerTogglableClicked);
  const stepSelectedWatcher = yield fork(watchStepSelected);
  const stepAppliedWatcher = yield fork(watchStepApplied);
  const fetchProcessViewWatcher = yield fork(watchFetchProcessView);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(valveClickWatcher);
  yield cancel(powerTogglableClickWatcher);
  yield cancel(stepSelectedWatcher);
  yield cancel(stepAppliedWatcher);
  yield cancel(fetchProcessViewWatcher);
}

// All sagas to be loaded
export default [
  processViewSaga,
];
