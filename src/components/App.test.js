import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('app', () => {
  it('renders app', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});

