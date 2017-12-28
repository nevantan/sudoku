import React from 'react';
import { shallow } from 'enzyme';
import {
  mapStateToProps,
  mapDispatchToProps,
  Cell
} from '../../components/Cell';
import { updateCell } from '../../actions/board';
import { setActive } from '../../actions/settings';

let focus, wrapper, center, _updateCell, _setActive;

test('should render Cell component correctly', () => {
  const wrapper = shallow(
    <Cell
      id="00"
      row={0}
      column={0}
      value={1}
      valid={true}
      fixed={true}
      active={false}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render error Cell component correctly', () => {
  const wrapper = shallow(
    <Cell
      id="00"
      row={0}
      column={0}
      value={1}
      valid={false}
      fixed={true}
      active={false}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render Cell component with value 0 correctly', () => {
  const wrapper = shallow(
    <Cell
      id="00"
      row={0}
      column={0}
      value={0}
      valid={true}
      fixed={false}
      active={false}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render Cell component with preset value correctly', () => {
  const wrapper = shallow(
    <Cell
      id="00"
      row={0}
      column={0}
      value={2}
      valid={true}
      fixed={true}
      active={false}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render Cell component with active value correctly', () => {
  const wrapper = shallow(
    <Cell
      id="00"
      row={0}
      column={0}
      value={2}
      valid={true}
      fixed={true}
      active={true}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should correctly map state to props', () => {
  const state = {
    board: [[{ value: 0, valid: true, fixed: false }]],
    settings: {
      activeValue: 2
    }
  };
  const ownProps = { row: 0, column: 0 };
  const props = mapStateToProps(state, ownProps);
  expect(props).toEqual({
    value: 0,
    valid: true,
    fixed: false,
    active: false
  });
});

test('should correctly map state to props with non-active', () => {
  const state = {
    board: [[{ value: 5, valid: true, fixed: false }]],
    settings: {
      activeValue: 5
    }
  };
  const ownProps = { row: 0, column: 0 };
  const props = mapStateToProps(state, ownProps);
  expect(props).toEqual({
    value: 5,
    valid: true,
    fixed: false,
    active: true
  });
});

test('should correctly map dispatch to props', () => {
  const dispatch = jest.fn();
  const mapped = mapDispatchToProps(dispatch);
  mapped.updateCell(0, 0, 1);
  expect(dispatch).toHaveBeenLastCalledWith(updateCell(0, 0, 1));
  mapped.setActive(6);
  expect(dispatch).toHaveBeenLastCalledWith(setActive(6));
});

// Before each arrow key test
// All other tests will override 'wrapper' and 'center'
// with test-function-scoped variables
beforeEach(() => {
  focus = jest.fn();
  _updateCell = jest.fn();
  _setActive = jest.fn();
  document.getElementById = jest.fn();
  document.getElementById.mockReturnValue({ focus });

  wrapper = shallow(
    <Cell
      id="11"
      row={1}
      column={1}
      value={2}
      valid={true}
      updateCell={_updateCell}
      setActive={_setActive}
    />
  );
  center = wrapper.find('#c11');
});

test('should correctly move focus on ArrowUp', () => {
  center.simulate('keydown', { key: 'ArrowUp' });
  expect(document.getElementById).toHaveBeenLastCalledWith('c01');
  expect(focus).toHaveBeenCalled();
});

test('should correctly move focus on ArrowDown', () => {
  center.simulate('keydown', { key: 'ArrowDown' });
  expect(document.getElementById).toHaveBeenLastCalledWith('c21');
  expect(focus).toHaveBeenCalled();
});

test('should correctly move focus on ArrowLeft', () => {
  center.simulate('keydown', { key: 'ArrowLeft' });
  expect(document.getElementById).toHaveBeenLastCalledWith('c10');
  expect(focus).toHaveBeenCalled();
});

test('should correctly move focus on ArrowRight', () => {
  center.simulate('keydown', { key: 'ArrowRight' });
  expect(document.getElementById).toHaveBeenLastCalledWith('c12');
  expect(focus).toHaveBeenCalled();
});

test('should correctly reset cell value on Backspace', () => {
  center.simulate('keydown', { key: 'Backspace' });
  expect(_updateCell).toHaveBeenLastCalledWith(1, 1, 0);
});

test('should ignore other keydown events', () => {
  center.simulate('keydown', { key: 'T' });
  expect(_updateCell).toHaveBeenCalledTimes(0);
});

test('should correctly update cell value on number keypress', () => {
  const value = '6';
  center.simulate('change', { target: { value } });
  expect(_updateCell).toHaveBeenLastCalledWith(1, 1, 6);
  expect(_setActive).toHaveBeenLastCalledWith(6);
});

test('should not update cell value on non-numeric keypress', () => {
  const value = 'a';
  center.simulate('change', { target: { value } });
  expect(_updateCell).toHaveBeenCalledTimes(0);
  expect(_setActive).toHaveBeenCalledTimes(0);
});

test('should properly set active on focus', () => {
  center.simulate('focus', {});
  expect(_setActive).toHaveBeenLastCalledWith(2);
});
