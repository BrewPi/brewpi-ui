/*
 *
 * processView reducer
 *
 */

import { fromJS } from 'immutable';
const sampleViews = require('services/mockApi/sample-data/sample-process-views.json');

import {
  VIEW_RECEIVED,
  LAYOUT_CHOOSEN,
} from './constants';
export const initialState = fromJS(sampleViews);

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
