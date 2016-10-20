/* eslint-disable global-require */
const view = require('./view.json');

view.layouts = {
  0: require('./layout.json'),
};
view.steps = [
  require('./steps/01_valves_closed.json'),
  require('./steps/02_valves_open.json'),
  require('./steps/03_fill_hlt.json'),
  require('./steps/04_fill_bk.json'),
  require('./steps/05_heat_hlt_and_bk.json'),
  require('./steps/06_add_grain.json'),
  require('./steps/07_mash_in.json'),
  require('./steps/08_mash_rest.json'),
  require('./steps/09_mash_recirc.json'),
  require('./steps/10_mash_out.json'),
  require('./steps/11_fly_sparge.json'),
];

export default view;
