import expect from 'expect';
import {
  processViewSelector,
  viewNameSelector,
  viewSlugSelector,
  activeLayoutIdSelector,
  activeLayoutPartsSelector,
  dimensionsSelector,
  layoutTableSelector,
  stepNamesSelector,
  activeStepIdSelector,
  activeStepSettingsSelector,
} from '../selectors';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);
import { fromJS } from 'immutable';
import { Table } from 'immutable-table';
const processView1 = fromJS(require('services/mockApi/sample-data/test_data/view1.json'));
import { api } from 'services/mockApi';

const stateView1 = fromJS({ processView: api.getProcessView('view1') }); // demo state with steps
const stateView2 = fromJS({ processView: api.getProcessView('view2') }); // demo state with overlapping parts in layout
const stateView3 = fromJS({ processView: api.getProcessView('view3') }); // has out of bound indices in layout

describe('ProcessViewPage', () => {
  describe('viewSlugSelector', () => {
    it('will return the slug from the URL parameters', () => {
      expect(viewSlugSelector({}, { params: { viewName: 'testslug' } })).toEqual('testslug');
    });
  });
  describe('processViewSelector', () => {
    it('will return the default view when the view id cannot be found', () => {
      const state = fromJS(api.getProcessView('non-existing')); // state will be undefined
      const view = processViewSelector(state);
      expect(view.get('name')).toEqual('');
      expect(view.get('height')).toEqual(10);
      expect(view.get('width')).toEqual(20);
    });
    it('will return the loaded view settings', () => {
      const view = processViewSelector(stateView1);
      expect(view.get('width')).toEqual(3);
      expect(view.get('name')).toEqual('View 1');
    });
  });
  describe('viewNameSelector', () => {
    it('will return the view name', () => {
      expect(viewNameSelector(stateView1)).toEqual('View 1');
    });
  });
  describe('activeLayoutIdSelector', () => {
    it('will return currently active layout id', () => {
      expect(activeLayoutIdSelector(stateView1)).toEqual('0');
    });
  });
  describe('activeLayoutPartsSelector', () => {
    it('will return currently active layout', () => {
      expect(activeLayoutPartsSelector(stateView1))
      .toEqual(processView1.getIn(['layouts', '0', 'parts']));
    });
  });
  describe('dimensionsSelector', () => {
    it('will return an object containing dimensions as width and height property', () => {
      expect(dimensionsSelector(stateView1)).toEqual({ width: 3, height: 2 });
    });
  });
  describe('layoutTableSelector', () => {
    const table = layoutTableSelector(stateView1);
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
      const table3 = layoutTableSelector(stateView3);
      expect(table3).toEqual(new Table(1, 1).setCell(0, 0,  // only cell 0,0 is kept for a 1x1 table
        fromJS([
          {
            type: 'TUBE_STRAIGHT',
            rotate: 90,
          },
        ])
      ));
    });
    it('will allow parts to share the same coordinate', () => {
      const table2 = layoutTableSelector(stateView2);
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
    const missingLayoutsState = stateView1.setIn(['processView', 'layouts'], {});
    const table4 = layoutTableSelector(missingLayoutsState);
    it('will return a correct size empty table when the layout is not found', () => {
      expect(table4).toEqual(new Table(3, 2));
    });
  });
  describe('stepsSelector', () => {
    it('will return a list of id\'s and names', () => {
      const steps = stepsSelector(stateView1);
      expect(steps).toEqual(fromJS({ 0: 'Step 1', 1: 'Step 2' }));
    });
  });
  describe('activeStepIdSelector', () => {
    it('will return the id of the currently active step', () => {
      expect(activeStepIdSelector(stateView1)).toEqual(0);
    });
  });
  describe('activeStepSettingsSelector', () => {
    it('will return the settings for the currently active step', () => {
      const settings = activeStepSettingsSelector(stateView1);
      expect(settings).toEqual(fromJS(
        [
          {
            id: '0',
            settings: {
              pos: closed,
            },
          },
        ])
      );
    });
    it('will return an empty list when the settings id cannot be found', () => {
      const stateInvalidStepId = stateView1.setIn(['processView', 'activeStepId'], -1);
      const settings = activeStepSettingsSelector(stateInvalidStepId);
      expect(settings).toEqual(fromJS([]));
    });
  });
});
