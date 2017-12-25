import validateRow from '../validators/row.js';

export default (state, action) => {
  const newBoard = state.board.map((row, y) => {
    if (y == action.row) {
      return row.map((cell, x) => {
        if (x == action.col) return { value: action.val, valid: true };
        return cell;
      });
    }
    return row;
  });

  const board = newBoard.map((row, i) => {
    const rowValid = validateRow(newBoard, i);
    if (!rowValid) {
      return row.map(cell => {
        return { value: cell.value, valid: false };
      });
    } else {
      return row;
    }
  });

  return {
    board
  };
};
