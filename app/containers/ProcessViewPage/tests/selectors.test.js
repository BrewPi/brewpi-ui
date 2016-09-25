import expect from 'expect';
import makeprocessViewSelector from '../selectors';
// import { fromJS } from 'immutable';


// const selector = selectprocessViewDomain();

const processView1 = {
  id: 0,
  rows: 0,
  cols: 1,
  showCoordinates: true,
  layoutId: 1,
};
const processView2 = {
  id: 1,
  rows: 0,
  cols: 1,
  showCoordinates: true,
  layoutId: 1,
};


const exampleState = {
  processViews: [
    processView1,
    processView2,
  ],
};

describe('getprocessViewSettings', () => {
  it('will extract settings for a specific processView', () => {
    const processViewSelector = makeprocessViewSelector();
    expect(processViewSelector(exampleState, { processViewId: 1 }).toEqual(processView1));
  });
});

