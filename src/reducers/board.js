import validateRow from '../validators/row.js';
import validateColumn from '../validators/column.js';

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
      return { value: cell.value, valid: rowValid && colValid };
    });
  });

  return {
    board
  };
};
