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
import { processView1, processView2, testState } from './testData.js';

describe('ProcessViewPage', () => {
  describe('makeViewSelector', () => {
    const viewSelector = makeViewSelector();
    it('will return the default view when the id cannot be found', () => {
      expect(viewSelector(testState, { params: { viewId: 'nonExistingViewId' } }).get('name')).toEqual('');
    });
    it('will extract settings for a specific processView', () => {
      expect(viewSelector(testState, { params: { viewId: 'view1' } })).toEqual(processView1);
      expect(viewSelector(testState, { params: { viewId: 'view2' } })).toEqual(processView2);
    });
  });
  describe('activeLayoutIdSelector', () => {
    it('will return currently active layout id', () => {
      expect(activeLayoutIdSelector(testState, { params: { viewId: 'view1' } })).toEqual('0');
    });
  });
  describe('activeLayoutPartsSelector', () => {
    it('will return currently active layout', () => {
      expect(activeLayoutPartsSelector(testState, { params: { viewId: 'view1' } }))
      .toEqual(processView1.getIn(['layouts', '0', 'parts']));
    });
  });
  describe('dimensionsSelector', () => {
    it('will return an object containing dimensions as width and height property', () => {
      expect(dimensionsSelector(testState, { params: { viewId: 'view1' } })).toEqual({ width: 3, height: 2 });
    });
  });
  describe('layoutTableSelector', () => {
    const table = layoutTableSelector(testState, { params: { viewId: 'view1' } });
    it('will have the dimensions defined in the view settings', () => {
      expect(table.width).toEqual(processView1.get('width'));
      expect(table.height).toEqual(processView1.get('height'));
    });
    it('will contain a list of the parts in the right positions', () => {
      expect(table.getCell(0, 1)).toEqual(
        fromJS([{
          type: 'TUBE_ELBOW',
          rotate: 90,
        }])
      );
      expect(table.getCell(2, 1)).toEqual(
        fromJS([{
          type: 'TUBE_STRAIGHT',
          rotate: 90,
        }]),
      );
    });
    it('will ignore parts with coordinates out of range (>= width or >= height)', () => {
      const table2 = layoutTableSelector(testState, { params: { viewId: 'view3' } });
      expect(table2).toEqual(new Table(1, 1).setCell(0, 0,  // only cell 0,0 is kept for a 1x1 table
        fromJS([
          {
            type: 'TUBE_STRAIGHT',
            rotate: 90,
          },
        ])
      ));
    });
    it('will allow parts to share the same coordinate', () => {
      const table2 = layoutTableSelector(testState, { params: { viewId: 'view2' } });
      expect(table2.getCell(2, 1)).toEqual(
        fromJS(
          [
            {
              type: 'TUBE_STRAIGHT',
              rotate: 90,
            }, {
              type: 'TUBE_BRIDGE',
              rotate: 0,
            },
          ],
        )
      );
    });
    const table3 = layoutTableSelector(testState, {});
    it('will return a 0x0 empty table when the view is not found', () => {
      expect(table3).toEqual(new Table());
    });
    const missingLayoutsState = testState.setIn(['processViews', 'view1', 'layouts'], {});
    const table4 = layoutTableSelector(missingLayoutsState, { params: { viewId: 'view1' } });
    it('will return a correct size empty table when the layout is not found', () => {
      expect(table4).toEqual(new Table(3, 2));
    });
  });
});
