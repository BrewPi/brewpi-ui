const sampleprocessViews = require('./sample-data/sample-process-views.json');

export const api = {
  getProcessViews() {
    const views = sampleprocessViews;
    return views;
  },

  getProcessView(viewId) {
    const views = this.getProcessViews();
    const view = views[viewId];
    return view;
  },
};
