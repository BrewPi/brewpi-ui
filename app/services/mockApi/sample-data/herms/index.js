/* eslint-disable global-require */
const view = require('./view.json');

view.layouts = {
  0: require('./layout.json'),
};
view.steps = [
  require('./steps/1_valves_closed.json'),
  require('./steps/2_valves_open.json'),
  require('./steps/3_fill_hlt.json'),
  require('./steps/4_fill_bk.json'),
  require('./steps/5_heat_hlt_and_bk.json'),
];

export default view;
