/*
 *
 * processView reducer
 *
 */

import { api } from '../../services/mockApi';
import { fromJS } from 'immutable';
import * as constants from './constants';
export const initialState = api.getProcessView('demo');

function viewReducer(state = fromJS({}), action) {
  switch (action.type) {
    case constants.VIEW_FETCH_SUCCESS:
      return action.view || state; // replace entire view with new data if not undefined
    default:
      return state;
  }
}

const processViewPageReducer = viewReducer;

export default processViewPageReducer;

