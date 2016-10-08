import { fromJS } from 'immutable';

const sampleView = require('./sample-data/view-herms.json');
const sampleLayout = require('./sample-data/layout-herms.json');

export const api = {
  getProcessViews() {
    const views = { demo: sampleView };
    views.demo.layouts = { 0: sampleLayout };
    return fromJS(views);
  },

  getProcessView(viewId) {
    const views = this.getProcessViews();
    const view = views.get(viewId);
    return view;
  },
};
