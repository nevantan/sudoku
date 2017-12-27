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
        <Cell id={'' + this.row + this.col} row={this.row} column={this.col} />
        <Cell
          id={'' + this.row + (this.col + 1)}
          row={this.row}
          column={this.col + 1}
        />
        <Cell
          id={'' + this.row + (this.col + 2)}
          row={this.row}
          column={this.col + 2}
        />
        <Cell
          id={'' + (this.row + 1) + this.col}
          row={this.row + 1}
          column={this.col}
        />
        <Cell
          id={'' + (this.row + 1) + (this.col + 1)}
          row={this.row + 1}
          column={this.col + 1}
        />
        <Cell
          id={'' + (this.row + 1) + (this.col + 2)}
          row={this.row + 1}
          column={this.col + 2}
        />
        <Cell
          id={'' + (this.row + 2) + this.col}
          row={this.row + 2}
          column={this.col}
        />
        <Cell
          id={'' + (this.row + 2) + (this.col + 1)}
          row={this.row + 2}
          column={this.col + 1}
        />
        <Cell
          id={'' + (this.row + 2) + (this.col + 2)}
          row={this.row + 2}
          column={this.col + 2}
        />
      </div>
    );
  }
}

export default Cage;
