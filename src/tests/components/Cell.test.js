import React from 'react';
import { shallow } from 'enzyme';
import Cell from '../../components/Cell';

test('should render Cell component correctly', () => {
  const wrapper = shallow(<Cell />);
  expect(wrapper).toMatchSnapshot();
});
