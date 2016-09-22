import expect from 'expect';
import { gridReducer, initialState } from '../reducer';

describe('gridReducer', () => {
  it('returns the initial state', () => {
    expect(gridReducer(undefined, {}).toEqual(initialState));
  });
});
