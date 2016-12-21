/* eslint-disable global-require */
import { fromJS } from 'immutable';
import hermsAutomatedValves from './sample-data/herms-automated-valves';
import hermsManualValves from './sample-data/herms-manual-valves';
import hermsHoseSwap from './sample-data/herms-hose-swap';
import fermentation from './sample-data/fermentation';
import rimsBiab from './sample-data/rims-biab';

let views = {
  'herms-automated-valves': hermsAutomatedValves,
  'herms-manual-valves': hermsManualValves,
  'herms-hose-swap': hermsHoseSwap,
  'rims-biab': rimsBiab,
  fermentation,
  view1: require('./sample-data/test_data/view1.json'),
  view2: require('./sample-data/test_data/view2.json'),
  view3: require('./sample-data/test_data/view3.json'),
  view4: require('./sample-data/test_data/view4.json'),
  view5: require('./sample-data/test_data/view5.json'),
  coilTest: require('./sample-data/test_data/coil_test.json'),
  valveTeeTest: require('./sample-data/test_data/valve_tee_test.json'),
};

views = fromJS(views);

export const api = {
  getProcessViews() {
    return views;
  },

  getProcessView(viewName) {
    const view = views.get(viewName);
    return view || fromJS({});
  },
};
