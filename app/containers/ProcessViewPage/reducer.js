/*
 *
 * processView reducer
 *
 */

import { api } from '../../services/mockApi';
import { fromJS } from 'immutable';

import {
  VIEW_RECEIVED,
  LAYOUT_CHOOSEN,
} from './constants';
export const initialState = fromJS({
  demo: api.getProcessView('demo'),
});

/*
function updateView(state, payload) {
  return state.setIn(['processViews', payload.index], payload.view);
}*/

export function processViewReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default processViewReducer;
