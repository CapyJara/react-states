import React from 'react';
import { shallow } from 'enzyme';
import Incrementor from './Incementor';

describe('incrementor', () => {
  it('renders incrementor', () => {
    const wrapper = shallow(<Incrementor />);
    expect(wrapper).toMatchSnapshot();
  });
});
