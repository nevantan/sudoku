import React from 'react';
import { connect } from 'react-redux';
import { updateCell } from '../actions/board';
import { setActive } from '../actions/settings';

export class Cell extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange = e => {
    const value = e.target.value.replace(this.props.value, '');
    if (value.match(/[0-9]/)) {
      this.props.updateCell(this.props.row, this.props.column, parseInt(value));
      this.props.setActive(parseInt(value));
    }
  };
  handleKeyDown = e => {
    if (e.key == 'Backspace' && !this.props.fixed) {
      this.props.updateCell(this.props.row, this.props.column, 0);
    } else if (e.key == 'ArrowRight' && this.props.column < 8) {
      document
        .getElementById('c' + this.props.row + (this.props.column + 1))
        .focus();
    } else if (e.key == 'ArrowLeft' && this.props.column > 0) {
      document
        .getElementById('c' + this.props.row + (this.props.column - 1))
        .focus();
    } else if (e.key == 'ArrowUp' && this.props.row > 0) {
      document
        .getElementById('c' + (this.props.row - 1) + this.props.column)
        .focus();
    } else if (e.key == 'ArrowDown' && this.props.row < 8) {
      document
        .getElementById('c' + (this.props.row + 1) + this.props.column)
        .focus();
    }
  };
  handleFocus = e => {
    this.props.setActive(this.props.value);
  };
  render() {
    let classes = 'cell';
    if (!this.props.valid) classes += ' error';
    if (this.props.fixed) classes += ' fixed';
    if (this.props.active) classes += ' highlight';

    return (
      <input
        id={'c' + this.props.id}
        className={classes}
        type="text"
        value={this.props.value ? this.props.value : ''}
        onChange={!this.props.fixed ? this.handleChange : undefined}
        onKeyDown={this.handleKeyDown}
        onFocus={this.handleFocus}
        readOnly={this.props.fixed}
      />
    );
  }
}

const mapStateToProps = (state, { row, column }) => {
  const cell = state.board[row][column];
  return {
    value: cell.value,
    valid: cell.valid,
    fixed: cell.fixed,
    active: state.settings.activeValue === cell.value && cell.value !== 0
  };
};

const mapDispatchToProps = dispatch => ({
  updateCell: (row, column, value) => dispatch(updateCell(row, column, value)),
  setActive: value => dispatch(setActive(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
export { mapStateToProps, mapDispatchToProps };
