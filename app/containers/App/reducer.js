/*
 *
 *  App reducer
 *
 */

import sampleProcessViews from 'services/mockApi/sample-data/sample-process-views.json';
import { combineReducers } from 'redux';

const sampleDataReducer = combineReducers({
  processViews: sampleProcessViews,
});

export default sampleDataReducer;
