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
    value: 5
  };
  const state = boardReducer({ board: emptyBoard }, action);
  expect(state.board[0][0]).toEqual({ value: 5, valid: true });
});

test('should properly mark row as invalid', () => {
  const action = {
    type: 'UPDATE_CELL',
    row: 0,
    col: 0,
    value: 3
  };
  const state = boardReducer({ board: partialValidBoard }, action);
  state.board[0].forEach(cell => {
    expect(cell).toEqual({ value: expect.any(Number), valid: false });
  });
});

test('should properly mark column as invalid', () => {
  const action = {
    type: 'UPDATE_CELL',
    row: 0,
    col: 0,
    value: 6
  };
  const state = boardReducer({ board: partialValidBoard }, action);
  state.board.forEach(row => {
    expect(row[0]).toEqual({ value: expect.any(Number), valid: false });
  });
});
