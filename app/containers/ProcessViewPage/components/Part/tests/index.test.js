import { rotateFlows } from '../index';
import expect from 'expect';

describe('<Part />', () => {
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
