/*
 *
 * ProcessView actions
 *
 */

import {
  RECEIVE_LAYOUTS,
  RECEIVE_PROCESS_VIEWS,
} from './constants';

export function receiveLayouts(layouts) {
  return {
    type: RECEIVE_LAYOUTS,
    layouts,
  };
}


export function receiveProcessViews(processViews) {
  return {
    type: RECEIVE_PROCESS_VIEWS,
    processViews,
  };
}
