import expect from 'expect';
import makeGridSelector from '../selectors';
// import { fromJS } from 'immutable';


// const selector = selectGridDomain();

const grid1 = {
  id: 0,
  rows: 0,
  cols: 1,
  showCoordinates: true,
  layoutId: 1,
};
const grid2 = {
  id: 1,
  rows: 0,
  cols: 1,
  showCoordinates: true,
  layoutId: 1,
};


const exampleState = {
  grids: [
    grid1,
    grid2,
  ],
};

describe('getGridSettings', () => {
  it('will extract settings for a specific grid', () => {
    const gridSelector = makeGridSelector();
    expect(gridSelector(exampleState, { gridId: 1 }).toEqual(grid1));
  });
});

