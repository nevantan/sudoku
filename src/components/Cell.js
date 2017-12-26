import React from 'react';
import { connect } from 'react-redux';

export class Cell extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>{this.props.value}</div>
      </div>
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
