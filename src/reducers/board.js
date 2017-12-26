import validateRow from '../validators/row.js';
import validateColumn from '../validators/column.js';
import validateCage from '../validators/cage.js';

export default (state, action) => {
  const newBoard = state.board.map((row, y) => {
    if (y == action.row) {
      return row.map((cell, x) => {
        if (x == action.col) return { value: action.value, valid: true };
        return cell;
      });
    }
    return row;
  });

  const rowValid = validateRow(newBoard, action.row);

  const board = newBoard.map((row, y) => {
    return row.map((cell, x) => {
      const colValid = validateColumn(newBoard, x);
      const cageValid = validateCage(newBoard, coordToCage(y, x));
      return { value: cell.value, valid: rowValid && colValid && cageValid };
    });
  });

  return {
    board
  };
};

const coordToCage = (row, col) => {
  return Math.floor(row / 3) * 3 + Math.floor(col / 3);
};

export { coordToCage };
