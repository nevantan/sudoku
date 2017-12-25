import React from 'react';
import { shallow } from 'enzyme';
import Board from '../../components/Board';

test('should render Board component correctly', () => {
  const wrapper = shallow(<Board />);
  expect(wrapper).toMatchSnapshot();
});
