import boardReducer from '../../reducers/board.js';
import {
  emptyBoard,
  partialValidBoard,
  partialInvalidBoard
} from '../fixtures/boards.js';

test('should update value of cell', () => {
  const action = {
    type: 'UPDATE_CELL',
    row: 0,
    col: 0,
    val: 5
  };
  const state = boardReducer({ board: emptyBoard }, action);
  expect(state.board[0][0]).toEqual({ value: 5, valid: true });
});

test('should properly mark row as invalid', () => {
  const action = {
    type: 'UPDATE_CELL',
    row: 0,
    col: 0,
    val: 8
  };
  const state = boardReducer({ board: partialValidBoard }, action);
  state.board[0].forEach(cell => {
    expect(cell).toEqual({ value: expect.any(Number), valid: false });
  });
});
