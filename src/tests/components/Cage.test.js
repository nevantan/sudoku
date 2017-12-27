import React from 'react';
import { shallow } from 'enzyme';
import Cage from '../../components/Cage';

test('should render Cage component correctly', () => {
  const wrapper = shallow(<Cage cage={0} />);
  expect(wrapper).toMatchSnapshot();
});
