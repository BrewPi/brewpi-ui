import { fromJS } from 'immutable';

export const processView1 = fromJS({
  name: 'view1',
  width: 3,
  height: 2,
  showCoordinates: true,
  currentLayoutId: '0',
  layouts: {
    0: {
      id: 0,
      name: 'layout1',
      parts: [
        {
          x: 0,
          y: 1,
          part: {
            type: 'TUBE_ELBOW',
            rotate: 90,
          },
        }, {
          x: 2,
          y: 1,
          part: {
            type: 'TUBE_STRAIGHT',
            rotate: 90,
          },
        },
      ],
    },
  },
});

export const processView2 = fromJS({
  name: 'view2',
  width: 5,
  height: 3,
  showCoordinates: true,
  currentLayoutId: '0',
  layouts: {
    0: {
      id: 0,
      name: 'layout1',
      parts: [
        {
          x: 2,
          y: 1,
          part: {
            type: 'TUBE_STRAIGHT',
            rotate: 90,
          },
        },
        {
          x: 2,
          y: 1,
          part: {
            type: 'TUBE_BRIDGE',
            rotate: 0,
          },
        },
      ],
    },
  },
});

export const processView3 = fromJS({
  name: 'view3',
  width: 1,
  height: 1,
  showCoordinates: true,
  currentLayoutId: '0',
  layouts: {
    0: {
      id: 0,
      name: 'layout1',
      parts: [
        {
          x: 0,
          y: 0,
          part: {
            type: 'TUBE_STRAIGHT',
            rotate: 90,
          },
        },
        {
          x: 1, // out of bounds
          y: 0,
          part: {
            type: 'TUBE_BRIDGE',
            rotate: 0,
          },
        },
        {
          x: 0,
          y: 1, // out of bounds
          part: {
            type: 'TUBE_BRIDGE',
            rotate: 0,
          },
        },
      ],
    },
  },
});

export const testState = fromJS({
  processViews: {
    view1: processView1,
    view2: processView2,
    view3: processView3,
  },
});
