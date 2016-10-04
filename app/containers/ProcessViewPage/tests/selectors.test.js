import expect from 'expect';
import {
  makeViewSelector,
  activeLayoutIdSelector,
  activeLayoutPartsSelector,
  dimensionsSelector,
  layoutTableSelector,
} from '../selectors';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);
import { fromJS } from 'immutable';
import { Table } from 'immutable-table';
import { processView1, testState } from './testData.js';

describe('ProcessViewPage', () => {
  describe('makeViewSelector', () => {
    const viewSelector = makeViewSelector();
    it('will return the default view when the id cannot be found', () => {
      expect(viewSelector(testState, { params: { viewId: '5' } }).get('name')).toEqual('');
    });
    it('will extract settings for a specific processView', () => {
      expect(viewSelector(testState, { params: { viewId: '0' } })).toEqual(processView1);
    });
  });
  describe('activeLayoutIdSelector', () => {
    it('will return currently active layout name', () => {
      expect(activeLayoutIdSelector(testState, { params: { viewId: '0' } })).toEqual('0');
    });
  });
  describe('activeLayoutPartsSelector', () => {
    it('will return currently active layout', () => {
      expect(activeLayoutPartsSelector(testState, { params: { viewId: '0' } }))
      .toEqual(processView1.getIn(['layouts', '0', 'parts']));
    });
  });
  describe('dimensionsSelector', () => {
    it('will return an object containing dimensions as width and height property', () => {
      expect(dimensionsSelector(testState, { params: { viewId: '0' } })).toEqual({ width: 3, height: 2 });
    });
  });
  describe('layoutTableSelector', () => {
    const table = layoutTableSelector(testState, { params: { viewId: '0' } });
    it('will have the dimensions defined in the view settings', () => {
      expect(table.width).toEqual(processView1.get('width'));
      expect(table.height).toEqual(processView1.get('height'));
    });
    it('will contain the parts in the right positions', () => {
      expect(table.getCell(0, 1)).toEqual(
        fromJS({
          type: 'TUBE_ELBOW',
          rotate: 90,
        })
      );
      expect(table.getCell(2, 1)).toEqual(
        fromJS({
          type: 'TUBE_STRAIGHT',
          rotate: 90,
        }),
      );
    });
    const table2 = layoutTableSelector(testState, {});
    it('will return a 0x0 empty table when the view is not found', () => {
      expect(table2).toEqual(new Table());
    });
    const missingLayoutsState = testState.setIn(['processViews', '0', 'layouts'], {});
    const table3 = layoutTableSelector(missingLayoutsState, { params: { viewId: '0' } });
    it('will return a correct size empty table when the layout is not found', () => {
      expect(table3).toEqual(new Table(3, 2));
    });
  });
});
