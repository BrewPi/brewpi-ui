/* eslint-disable global-require */
const view = require('./view.json');

view.layouts = [
  require('./layouts/00_fill_kettle.json'),
  require('./layouts/01_rims_connected.json'),
];
view.steps = [
  require('./steps/00_fill_kettle.json'),
  require('./steps/01_preheat_kettle.json'),
  require('./steps/02_add_grain.json'),
];

export default view;
