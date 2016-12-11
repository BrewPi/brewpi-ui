/* eslint-disable global-require */
const view = require('./view.json');

view.layouts = [
  require('./layouts/00_idle.json'),
  require('./layouts/01_fill_hlt.json'),
  require('./layouts/02_fill_bk.json'),
];
view.steps = [
  require('./steps/00_idle.json'),
  require('./steps/01_fill_hlt.json'),
  require('./steps/02_fill_bk.json'),
];

export default view;
