import expect from 'expect';
import { processViewReducer, initialState } from '../reducer';

describe('processViewsReducer', () => {
  it('returns the initial state', () => {
    expect(processViewReducer(undefined, {})).toEqual(initialState);
  });
});
