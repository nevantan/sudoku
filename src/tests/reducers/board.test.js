import boardReducer, { coordToCage } from '../../reducers/board.js';
import {
  emptyBoard,
  partialValidBoard,
  partialInvalidBoard
} from '../fixtures/boards.js';

test('should return default state on unhandled action', () => {
  const action = {
    type: 'FOO'
  };
  const state = boardReducer(undefined, action);
  expect(state).toEqual(emptyBoard);
});

test('should update value of cell', () => {
  const action = {
    type: 'UPDATE_CELL',
    row: 0,
    column: 0,
    value: 5
  };
  const state = boardReducer(emptyBoard, action);
  expect(state[0][0]).toEqual({ value: 5, valid: true });
});

test('should properly mark row as invalid', () => {
  const action = {
    type: 'UPDATE_CELL',
    row: 0,
    column: 0,
    value: 3
  };
  const state = boardReducer(partialValidBoard, action);
  state[0].forEach(cell => {
    expect(cell).toEqual({ value: expect.any(Number), valid: false });
  });
});

test('should properly mark column as invalid', () => {
  const action = {
    type: 'UPDATE_CELL',
    row: 0,
    column: 0,
    value: 6
  };
  const state = boardReducer(partialValidBoard, action);
  state.forEach(row => {
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
    column: 1,
    value: 5
  };
  const state = boardReducer(partialValidBoard, action);
  expect(state[0][0]).toEqual({
    value: expect.any(Number),
    valid: false
  });
  expect(state[0][1]).toEqual({
    value: expect.any(Number),
    valid: false
  });
  expect(state[0][2]).toEqual({
    value: expect.any(Number),
    valid: false
  });
  expect(state[1][0]).toEqual({
    value: expect.any(Number),
    valid: false
  });
  expect(state[1][1]).toEqual({
    value: expect.any(Number),
    valid: false
  });
  expect(state[1][2]).toEqual({
    value: expect.any(Number),
    valid: false
  });
  expect(state[2][0]).toEqual({
    value: expect.any(Number),
    valid: false
  });
  expect(state[2][1]).toEqual({
    value: expect.any(Number),
    valid: false
  });
  expect(state[2][2]).toEqual({
    value: expect.any(Number),
    valid: false
  });
});
