/*
 *
 * processView reducer
 *
 */

import { api } from '../../services/mockApi';

import {
  VIEW_RECEIVED,
  LAYOUT_CHOOSEN,
} from './constants';
export const initialState = api.getProcessViews();

function updateView(state, payload) {
  return state.setIn(['processViews', payload.index], payload.view);
}

export function processViewReducer(state = initialState, action) {
  switch (action.type) {
    case VIEW_RECEIVED:
      return updateView(state, action.payload);
    case LAYOUT_CHOOSEN:
      return state.setIn('layouts', action.payload);
    default:
      return state;
  }
}

export default processViewReducer;
