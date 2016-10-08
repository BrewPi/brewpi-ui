/*
 *
 *  App reducer
 *
 */

import { combineReducers } from 'redux';
import { processViewReducer } from '../ProcessViewPage/reducer';
const sampleDataReducer = combineReducers({
  processViews: processViewReducer,
});

export default sampleDataReducer;
