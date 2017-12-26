import boardReducer, { coordToCage } from '../../reducers/board.js';
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

test('should return proper cage for provided coords', () => {
  let cage = coordToCage(0, 0);
  expect(cage).toBe(0);

  cage = coordToCage(4, 4);
  expect(cage).toBe(4);

  cage = coordToCage(6, 3);
  expect(cage).toBe(7);
});

test('should properly mark cage as invalid', () => {
  const action = {
    type: 'UPDATE_CELL',
    row: 0,
    col: 1,
    value: 5
  };
  const state = boardReducer({ board: partialValidBoard }, action);
  expect(state.board[0][0]).toEqual({
    value: expect.any(Number),
    valid: false
  });
  expect(state.board[0][1]).toEqual({
    value: expect.any(Number),
    valid: false
  });
  expect(state.board[0][2]).toEqual({
    value: expect.any(Number),
    valid: false
  });
  expect(state.board[1][0]).toEqual({
    value: expect.any(Number),
    valid: false
  });
  expect(state.board[1][1]).toEqual({
    value: expect.any(Number),
    valid: false
  });
  expect(state.board[1][2]).toEqual({
    value: expect.any(Number),
    valid: false
  });
  expect(state.board[2][0]).toEqual({
    value: expect.any(Number),
    valid: false
  });
  expect(state.board[2][1]).toEqual({
    value: expect.any(Number),
    valid: false
  });
  expect(state.board[2][2]).toEqual({
    value: expect.any(Number),
    valid: false
  });
});
