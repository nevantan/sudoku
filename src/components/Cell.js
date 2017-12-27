import React from 'react';
import { connect } from 'react-redux';
import { updateCell } from '../actions/board';

export class Cell extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange = e => {
    const value = e.target.value.replace(this.props.value, '');
    if (value.match(/[0-9]/)) {
      this.props.updateCell(this.props.row, this.props.column, value);
    }
  };
  handleKeyDown = e => {
    if (e.key == 'Backspace') {
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
  render() {
    return (
      <input
        id={'c' + this.props.id}
        className={this.props.valid ? 'cell' : 'cell error'}
        type="text"
        value={this.props.value ? this.props.value : ''}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}

const mapStateToProps = (state, { row, column }) => {
  const cell = state.board[row][column];
  return {
    value: cell.value,
    valid: cell.valid
  };
};

const mapDispatchToProps = dispatch => ({
  updateCell: (row, column, value) => dispatch(updateCell(row, column, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
export { mapStateToProps, mapDispatchToProps };
