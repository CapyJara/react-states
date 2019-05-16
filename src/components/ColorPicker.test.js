import React from 'react';
import ColorPicker from './ColorPicker';
import { shallow } from 'enzyme';

describe('color picker', () => {
  it('renders color picker', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });
});
