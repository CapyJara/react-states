import React from 'react';
import { shallow } from 'enzyme';
import RandomColor from './RandomColor';

describe('App component', () => {
  it('renders a App', () => {
    const wrapper = shallow(<RandomColor />);
    expect(wrapper).toMatchSnapshot();
  });
});
