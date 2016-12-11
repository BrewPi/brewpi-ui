import expect from 'expect';
import {
  processViewSelector,
  viewNameSelector,
  viewIdSelector,
  activeLayoutIdSelector,
  layoutPartsSelector,
  dimensionsSelector,
  layoutTableSelector,
  flowTableSelector,
  stepsSelector,
  activeStepIdSelector,
  activeStepSettingsSelector,
  actualFlowTableSelector,
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
const stateView4 = fromJS({ processView: api.getProcessView('view4') }); // has an input and output to test flows

describe('ProcessViewPage', () => {
  describe('viewIdSelector', () => {
    it('will return the slug from the URL parameters', () => {
      expect(viewIdSelector({}, { params: { viewId: 'testslug' } })).toEqual('testslug');
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
    it('will return the layout ID in the active step', () => {
      const stateViewModified = stateView1.setIn(['processView', 'activeStepId'], 2);
      expect(activeLayoutIdSelector(stateViewModified)).toEqual('1');
    });
  });
  describe('activeLayoutPartsSelector', () => {
    it('will return currently active layout', () => {
      expect(layoutPartsSelector(stateView1))
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
  describe('flowTableSelector', () => {
    it('will calculate possible flows for each tile', () => {
      const flowTable = flowTableSelector(stateView4);
      expect(flowTable.getCell(0, 0)).toEqual({ s: 'r', liquid: 'water' }); // input == source, set to water
      expect(flowTable.getCell(1, 0)).toEqual({ r: 'l', l: 'r' }); // straight
      expect(flowTable.getCell(2, 0)).toEqual({ l: 'b', b: 'l' }); // elbow, rotated 180deg
      expect(flowTable.getCell(2, 1)).toEqual({ b: 'lt', t: 'lb', l: 'tb' }); // tee, rotated 270deg
      expect(flowTable.getCell(2, 2)).toEqual({ t: 's' }); // output, rotated 90deg
      expect(flowTable.getCell(1, 1)).toEqual({ r: 's' }); // output, rotated 180deg
    });
  });
  describe('actualFlowTableSelector', () => {
    it('will calculate the actual flows for each tile', () => {
      const flowTable = actualFlowTableSelector(stateView4);
      expect(flowTable.getCell(0, 0).toJS()).toEqual([{ dir: { s: 'r' }, liquid: 'water' }]); // input == source
      expect(flowTable.getCell(1, 0).toJS()).toEqual([{ dir: { l: 'r' }, liquid: 'water' }]); // straight
      expect(flowTable.getCell(2, 0).toJS()).toEqual([{ dir: { l: 'b' }, liquid: 'water' }]); // elbow, rotated 180deg
      expect(flowTable.getCell(2, 1).toJS()).toEqual([{ dir: { t: 'lb' }, liquid: 'water' }]); // tee, rotated 270deg
      expect(flowTable.getCell(2, 2).toJS()).toEqual([{ dir: { t: 's' }, liquid: 'water' }]); // output, rotated 90deg
      expect(flowTable.getCell(1, 1).toJS()).toEqual([{ dir: { r: 's' }, liquid: 'water' }]); // output, rotated 180deg
    });
  });
  describe('stepsSelector', () => {
    it('will return a list of {id, name} objects, sorted by id', () => {
      const steps = stepsSelector(fromJS({ processView: { steps: [
        { id: 2, name: 'Step 2', settings: [] },
        { id: 1, name: 'Step 1', settings: [] },
      ] } }));
      expect(steps).toEqual(fromJS([
        { id: 1, name: 'Step 1', settings: [] },
        { id: 2, name: 'Step 2', settings: [] },
      ]));
    });
    it('will return an empty list when steps is not set', () => {
      expect(stepsSelector(fromJS({}))).toEqual(fromJS([]));
    });
  });
  describe('activeStepIdSelector', () => {
    it('will return undefined when activeStepId is not set', () => {
      const stepId = activeStepIdSelector(stateView1.deleteIn(['processView', 'activeStepId']));
      expect(stepId).toEqual(undefined);
    });
    it('will return undefined when the step doesn\'t exist', () => {
      const stepId = activeStepIdSelector(stateView1.setIn(['processView', 'activeStepId'], 99));
      expect(stepId).toEqual(undefined);
    });
    it('will return the id of the currently active step', () => {
      const stepId = activeStepIdSelector(stateView1.setIn(['processView', 'activeStepId'], 2));
      expect(stepId).toEqual(2);
    });
  });
  describe('activeStepSettingsSelector', () => {
    it('will return a list of settings for the currently active step', () => {
      const settings = activeStepSettingsSelector(stateView1);
      expect(settings).toEqual(
        fromJS([
          {
            id: 'v0',
            settings: {
              pos: 'closed',
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
