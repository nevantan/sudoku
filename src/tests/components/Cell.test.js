import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, Cell } from '../../components/Cell';

test('should render Cell component correctly', () => {
  const wrapper = shallow(<Cell row={0} column={0} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly map state to props', () => {
  const state = {
    board: [[{ value: 0, valid: true }]]
  };
  const ownProps = { row: 0, column: 0 };
  const props = mapStateToProps(state, ownProps);
  expect(props).toEqual({
    value: 0,
    valid: true
  });
});
