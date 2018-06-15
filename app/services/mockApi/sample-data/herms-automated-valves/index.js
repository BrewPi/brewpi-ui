/* eslint-disable global-require */
const view = require('./view.json');

view.layouts = [
  require('./layout.json'),
];
view.steps = [
  require('./steps/01_valves_open.json'),
  require('./steps/02_valves_closed.json'),
  require('./steps/03_fill_hlt.json'),
  require('./steps/04_fill_bk.json'),
  require('./steps/05_heat_hlt_and_bk.json'),
  require('./steps/06_add_grain.json'),
  require('./steps/07_mash_in.json'),
  require('./steps/08_mash_rest.json'),
  require('./steps/09_mash_recirc.json'),
  require('./steps/10_raise_to_sparge.json'),
  require('./steps/11_fly_sparge.json'),
  require('./steps/12_sparge_out.json'),
  require('./steps/13_boil.json'),
  require('./steps/14_whirlpool.json'),
  require('./steps/15_prepare_transfer.json'),
  require('./steps/16_cool_and_transfer.json'),
  require('./steps/17_empty_hlt_coil.json'),
  require('./steps/18_top_up_fermenter.json'),
  require('./steps/19_cip_water_coil.json'),
  require('./steps/20_cip_water_cfc.json'),
  require('./steps/21_cip_water_mt_bk.json'),
  require('./steps/22_cip_water_drain.json'),
  require('./steps/23_cip_pbw_prep.json'),
  require('./steps/24_cip_pbw_bk.json'),
  require('./steps/25_cip_pbw_coil_cfc.json'),
  require('./steps/26_cip_pbw_mt.json'),
  require('./steps/27_cip_cleaner_drain.json'),
];

export default view;
