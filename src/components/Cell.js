import React from 'react';
import { connect } from 'react-redux';

export class Cell extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input
        id={'c' + this.props.id}
        className={this.props.valid ? 'cell' : 'cell error'}
        type="text"
        value={this.props.value}
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

export default connect(mapStateToProps)(Cell);
export { mapStateToProps };
