/*
 *
 * processView reducer
 *
 */

import { fromJS } from 'immutable';

import {
  // RECEIVE_LAYOUTS,
  // RECEIVE_PROCESS_VIEWS,
} from './constants';

const initialState = fromJS({
  procesviews: [],
});


function processViewReducer(state = initialState, action) {
  switch (action.type) {
    /*
    case RECEIVE_PROCESS_VIEWS:
      return state.set('settings', action.settings);
    case RECEIVE_LAYOUTS:
      return state.set('layouts', action.layouts);
      */
    default:
      return state;
  }
}

export default processViewReducer;
