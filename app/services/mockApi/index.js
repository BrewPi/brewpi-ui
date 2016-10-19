/* eslint-disable global-require */
import { fromJS } from 'immutable';
import herms from './sample-data/herms';
import fermentation from './sample-data/fermentation';

let views = {
  herms,
  fermentation,
  view1: require('./sample-data/test_data/view1.json'),
  view2: require('./sample-data/test_data/view2.json'),
  view3: require('./sample-data/test_data/view3.json'),
  view4: require('./sample-data/test_data/view4.json'),
  coilTest: require('./sample-data/test_data/coil_test.json'),
};

views = fromJS(views);

export const api = {
  getProcessViews() {
    return views;
  },

  getProcessView(viewName) {
    const view = views.get(viewName);
    return view || fromJS({});
  },
};
