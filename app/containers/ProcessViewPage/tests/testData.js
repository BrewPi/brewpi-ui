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
          y: 3,
          part: {
            type: 'TUBE_STRAIGHT',
            rotate: 90,
          },
        },
        {
          x: 4,
          y: 5,
          part: {
            type: 'TUBE_ELBOW',
            rotate: 0,
          },
        },
      ],
    },
  },
});


export const testState = fromJS({
  processViews: {
    0: processView1,
    1: processView2,
  },
});
