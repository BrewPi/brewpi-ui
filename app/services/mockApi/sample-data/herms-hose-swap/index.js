/* eslint-disable global-require */
const view = require('./view.json');

view.layouts = [
  require('./layouts/00_idle.json'),
  require('./layouts/01_fill_hlt.json'),
  require('./layouts/02_fill_bk.json'),
  require('./layouts/03_heat_hlt_and_bk.json'),
  require('./layouts/04_add_grain_mt.json'),
  require('./layouts/05_mash_in.json'),
  require('./layouts/06_mash_rest.json'),
  require('./layouts/07_mash_recirc.json'),
  require('./layouts/08_fly_sparge.json'),
  require('./layouts/09_sparge_out.json'),
];
view.steps = [
  require('./steps/00_idle.json'),
  require('./steps/01_fill_hlt.json'),
  require('./steps/02_fill_bk.json'),
  require('./steps/03_heat_hlt_and_bk.json'),
  require('./steps/04_add_grain_mt.json'),
  require('./steps/05_mash_in.json'),
  require('./steps/06_mash_rest.json'),
  require('./steps/07_mash_recirc.json'),
  require('./steps/08_fly_sparge.json'),
  require('./steps/09_sparge_out.json'),
];

export default view;
