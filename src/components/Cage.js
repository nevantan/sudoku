import React from 'react';
import Cell from './Cell';

class Cage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount = () => {
    const cage = this.props.cage;
    this.row = Math.floor(cage / 3) * 3;
    this.col = (cage - this.row) * 3;
  };
  render() {
    return (
      <div>
        <p>Cage Component</p>
        <Cell row={this.row} column={this.col} />
        <Cell row={this.row} column={this.col + 1} />
        <Cell row={this.row} column={this.col + 2} />
        <Cell row={this.row + 1} column={this.col} />
        <Cell row={this.row + 1} column={this.col + 1} />
        <Cell row={this.row + 1} column={this.col + 2} />
        <Cell row={this.row + 2} column={this.col} />
        <Cell row={this.row + 2} column={this.col + 1} />
        <Cell row={this.row + 2} column={this.col + 2} />
      </div>
    );
  }
}

export default Cage;
