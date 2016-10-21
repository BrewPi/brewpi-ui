// import CatalogPage from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import CatalogPage from '../';

describe('<CatalogPage />', () => {
  it('Should render a table', () => {
    const renderedComponent = shallow(<CatalogPage />);
    expect(renderedComponent.find('Table').length).toEqual(1);
  });
});
