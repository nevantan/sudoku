import validateRow from '../validators/row.js';
import validateColumn from '../validators/column.js';
import validateCage from '../validators/cage.js';
import { emptyBoard } from '../tests/fixtures/boards.js';

const defaultState = emptyBoard;

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_CELL':
      // Make change to the board
      const newBoard = state.map((row, y) => {
        if (y == action.row) {
          return row.map((cell, x) => {
            if (x == action.column) return { value: action.value, valid: true };
            return cell;
          });
        }
        return row;
      });

      // Validate new board state
      const board = newBoard.map((row, y) => {
        const rowValid = validateRow(newBoard, y);
        return row.map((cell, x) => {
          const colValid = validateColumn(newBoard, x);
          const cageValid = validateCage(newBoard, coordToCage(y, x));
          return {
            value: cell.value,
            valid: rowValid && colValid && cageValid
          };
        });
      });

      return board;
    default:
      return state;
  }
};

const coordToCage = (row, col) => {
  return Math.floor(row / 3) * 3 + Math.floor(col / 3);
};

export { coordToCage };
