import expect from 'expect';
import { api } from '../';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

describe('mockApi', () => {
  describe('getProcessView', () => {
    it('should return a single process view', () => {
      expect(api.getProcessView('view1').get('layouts')).include('parts');
    });
  });
});
