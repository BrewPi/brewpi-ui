import expect from 'expect';
import processViewReducer from '../reducer';

describe('processViewsReducer', () => {
  it('returns a valid initial state', () => {
    expect(processViewReducer(undefined, {})).toContain('view');
  });
});
