import { fromJS } from 'immutable';

const hermsView = require('./sample-data/view-herms.json');
const hermsLayout = require('./sample-data/layout-herms.json');
const step0 = require('./sample-data/steps/0_valves_closed.json');
const step1 = require('./sample-data/steps/1_valves_open.json');
hermsView.layouts = { 0: hermsLayout };
hermsView.steps = [
  step0,
  step1,
];


const fermentView = require('./sample-data/view-ferment.json');
const fermentLayout = require('./sample-data/layout-ferment.json');
fermentView.layouts = { 0: fermentLayout };

const view1 = require('./sample-data/test_data/view1.json');
const view2 = require('./sample-data/test_data/view2.json');
const view3 = require('./sample-data/test_data/view3.json');

const views = fromJS({
  herms: hermsView,
  fermentation: fermentView,
  view1,
  view2,
  view3,
});


export const api = {
  getProcessViews() {
    return views;
  },

  getProcessView(viewName) {
    const view = views.get(viewName);
    return view || fromJS({});
  },
};
