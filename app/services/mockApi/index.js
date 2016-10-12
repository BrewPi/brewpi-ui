import { fromJS } from 'immutable';

const hermsView = require('./sample-data/view-herms.json');
const hermsLayout = require('./sample-data/layout-herms.json');
const view1 = require('./sample-data/test_data/view1.json');
const view2 = require('./sample-data/test_data/view2.json');
const view3 = require('./sample-data/test_data/view3.json');
const step0 = require('./sample-data/steps/0_valves_closed.json');
const step1 = require('./sample-data/steps/1_valves_open.json');

export const api = {
  getProcessViews() {
    const views = {
      demo: hermsView,
      view1,
      view2,
      view3,
    };
    views.demo.layouts = { 0: hermsLayout };
    views.demo.steps = [
      step0,
      step1,
    ];
    return fromJS(views);
  },

  getProcessView(viewName) {
    const views = this.getProcessViews();
    const view = views.get(viewName);
    return view;
  },
};
