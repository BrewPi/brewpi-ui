/*
 *
 * Grid reducer
 *
 */

import { fromJS } from 'immutable';

import {
  LAYOUT_FETCH_SUCCEEDED,
  LAYOUT_FETCH_FAILED,
} from './constants';

const initialState = fromJS({
  grids: {},
  layout: {},
});

function gridReducer(state = initialState, action) {
  switch (action.type) {
    case LAYOUT_FETCH_SUCCEEDED:
      return state;
    case LAYOUT_FETCH_FAILED:
      return state;
    default:
      return state;
  }
}

export default gridReducer;
