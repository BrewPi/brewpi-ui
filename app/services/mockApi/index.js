import { fromJS } from 'immutable';

const sampleprocessViews = require('./sample-data/sample-processviews.json');


export const api = {
  getProcessViews() {
    const views = sampleprocessViews;
    return fromJS(views);
  },

  getProcessView(viewId) {
    const views = this.getProcessViews();
    const view = views.get(viewId);
    return view;
  },
};
