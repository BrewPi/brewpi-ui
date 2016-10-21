import Tile from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

const children = (<div />);
const renderComponent = (props = {}) => shallow(
  <Tile {...props}>
    {children}
  </Tile>
);

describe('<Tile />', () => {
  it('should have children', () => {
    const renderedComponent = renderComponent({ x: 0, y: 1 });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a coordinate span when props.showCoordinates is true', () => {
    const renderedComponent = renderComponent({ x: 0, y: 1, showCoordinates: true });
    expect(renderedComponent.find('span').text()).toEqual('0,1');
  });
});
