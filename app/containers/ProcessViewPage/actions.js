/*
 *
 * ProcessView actions
 *
 */

import {
  VIEW_RECEIVED,
  LAYOUT_CHOOSEN,
  COMPONENT_LOADED,
} from './constants';

export function viewReceived(view) {
  return {
    type: VIEW_RECEIVED,
    view,
  };
}


export function layoutChoosen(layoutId) {
  return {
    type: LAYOUT_CHOOSEN,
    layoutId,
  };
}

export function componentLoaded(id) {
  return {
    type: COMPONENT_LOADED,
    id,
  };
}
