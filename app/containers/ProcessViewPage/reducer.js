/*
 *
 * processView reducer
 *
 */

import { api } from '../../services/mockApi';
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import * as constants from './constants';
export const initialState = api.getProcessView('demo');

function viewReducer(view = fromJS({}), action) {
  switch (action.type) {
    case constants.VIEW_FETCH_SUCCESS:
      return action.view || view;
    default:
      return view;
  }
}

const processViewPageReducer = combineReducers({
  view: viewReducer,
});

export default processViewPageReducer;

