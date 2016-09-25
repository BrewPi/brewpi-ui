import expect from 'expect';
import { processViewsReducer, initialState } from '../reducer';

describe('processViewsReducer', () => {
  it('returns the initial state', () => {
    expect(processViewsReducer(undefined, {}).toEqual(initialState));
  });
});
