import React from 'react';
import Board from './Board';

const Layout = () => (
  <div>
    <header>
      <h1>Sudoku</h1>
    </header>
    <div className="wrapper">
      <Board />
    </div>
  </div>
);

export default Layout;
