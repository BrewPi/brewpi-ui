import { createSelector } from 'reselect';


const defaultGridSettings = {
  rows: 2,
  cols: 2,
  showCoordinates: true,
};

/**
 * Get settings for a specific grid
 */
const getGridSettings = (state, props) => {
  let settings = defaultGridSettings;
  if (props && props.gridId) {
    settings = state.grids[props.gridId].settings;
  }
  return settings;
};

/**
 * Get a layout to render in the grid
 */

const getLayout = (state, props) => {
  let layout = [];
  if (props && props.layoutId) {
    layout = state.get('layouts')[props.layoutId];
  }
  return layout;
};

/*
const makeEmptyGrid = (cols, rows) => {
  const tiles = [];
  let row = [];

  for (let y = 0; y < rows; y++) {
    row = [];
    for (let x = 0; x < cols; x++) {
      const key = `tile-${x.toString()}-${y.toString()}`;
      row.push(
        {
          key,
          pos: `x=${x} y=${y}`,
        }
      );
    }
    tiles.push(row);
  }
  return tiles;
};
*/

const makeGridSettingsSelector = (state, props) => createSelector(
  getGridSettings,
  (settings) => (settings)
);

const makeLayoutSelector = (state, props) => createSelector(
  getLayout,
  (settings) => (settings)
);

export {
  makeLayoutSelector,
  makeGridSettingsSelector,
};
