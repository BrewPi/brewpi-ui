import { rotateFlows, rotateArray } from '../index';
import expect from 'expect';

describe('<Part />', () => {
  describe('rotateArray', () => {
    it('should rotate a 2 dimensional array by 90/180/270 degrees', () => {
      expect(rotateArray([[0, 1, 2], [3, 4, 5]], 0)).toEqual([[0, 1, 2], [3, 4, 5]]);
      expect(rotateArray([[0, 1, 2], [3, 4, 5]], 90)).toEqual([[3, 0], [4, 1], [5, 2]]);
      expect(rotateArray([[0, 1, 2], [3, 4, 5]], 180)).toEqual([[5, 4, 3], [2, 1, 0]]);
      expect(rotateArray([[0, 1, 2], [3, 4, 5]], 270)).toEqual([[2, 5], [1, 4], [0, 3]]);
    });
  });
  describe('rotateFlows', () => {
    it('should return correctly rotated flows for a single tile', () => {
      expect(rotateFlows({ l: 'r' }, 180)).toEqual({ r: 'l' });
      // tube 90
      expect(rotateFlows({ l: 'r', r: 'l' }, 180)).toEqual({ r: 'l', l: 'r' });
      expect(rotateFlows({ l: 'r', r: 'l' }, 90)).toEqual({ t: 'b', b: 't' });
      // tee
      expect(rotateFlows({ l: 'tr', t: 'lr', r: 'tl' }, 270)).toEqual(
        { b: 'lt', l: 'bt', t: 'lb' }); // tee
    });
  });
});
