import boardReducer, { coordToCage } from '../../reducers/board.js';
import {
  emptyBoard,
  hardPartialValidBoard,
  partialValidBoard,
  partialInvalidBoard
} from '../fixtures/boards.js';

test('should return default state on unhandled action', () => {
  const action = {
    type: 'FOO'
  };
  const state = boardReducer(undefined, action);
  expect(state).toEqual(expect.any(Array));
});

test('should initialize with a random puzzle', () => {
  const action = {
    type: '@@INIT'
  };
  const state = boardReducer(undefined, action);
  expect(state).toEqual(expect.any(Array));
});

test('should update value of cell', () => {
  const action = {
    type: 'UPDATE_CELL',
    row: 0,
    column: 0,
    value: 5,
    fixed: false
  };
  const state = boardReducer(emptyBoard, action);
  expect(state[0][0]).toEqual({ value: 5, valid: true, fixed: false });
});

test('should properly mark row as invalid', () => {
  const action = {
    type: 'UPDATE_CELL',
    row: 0,
    column: 0,
    value: 3,
    fixed: false
  };
  const state = boardReducer(partialValidBoard, action);
  state[0].forEach(cell => {
    expect(cell).toEqual({
      value: expect.any(Number),
      valid: false,
      fixed: expect.any(Boolean)
    });
  });
});

test('should not improperly mark row as invalid', () => {
  const action = {
    type: 'UPDATE_CELL',
    row: 0,
    column: 0,
    value: 3,
    fixed: false
  };
  const state = boardReducer(partialValidBoard, action);
  expect(state[1][0]).toEqual({
    value: expect.any(Number),
    valid: true,
    fixed: expect.any(Boolean)
  });
});

test('should properly mark column as invalid', () => {
  const action = {
    type: 'UPDATE_CELL',
    row: 0,
    column: 0,
    value: 6,
    fixed: false
  };
  const state = boardReducer(partialValidBoard, action);
  state.forEach(row => {
    expect(row[0]).toEqual({
      value: expect.any(Number),
      valid: false,
      fixed: expect.any(Boolean)
    });
  });
});

test('should not improperly mark column as invalid', () => {
  const action = {
    type: 'UPDATE_CELL',
    row: 0,
    column: 0,
    value: 6,
    fixed: false
  };
  const state = boardReducer(partialValidBoard, action);
  expect(state[0][1]).toEqual({
    value: expect.any(Number),
    valid: true,
    fixed: expect.any(Boolean)
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
    value: 5,
    fixed: false
  };
  const state = boardReducer(partialValidBoard, action);
  expect(state[0][0]).toEqual({
    value: expect.any(Number),
    valid: false,
    fixed: expect.any(Boolean)
  });
  expect(state[0][1]).toEqual({
    value: expect.any(Number),
    valid: false,
    fixed: expect.any(Boolean)
  });
  expect(state[0][2]).toEqual({
    value: expect.any(Number),
    valid: false,
    fixed: expect.any(Boolean)
  });
  expect(state[1][0]).toEqual({
    value: expect.any(Number),
    valid: false,
    fixed: expect.any(Boolean)
  });
  expect(state[1][1]).toEqual({
    value: expect.any(Number),
    valid: false,
    fixed: expect.any(Boolean)
  });
  expect(state[1][2]).toEqual({
    value: expect.any(Number),
    valid: false,
    fixed: expect.any(Boolean)
  });
  expect(state[2][0]).toEqual({
    value: expect.any(Number),
    valid: false,
    fixed: expect.any(Boolean)
  });
  expect(state[2][1]).toEqual({
    value: expect.any(Number),
    valid: false,
    fixed: expect.any(Boolean)
  });
  expect(state[2][2]).toEqual({
    value: expect.any(Number),
    valid: false,
    fixed: expect.any(Boolean)
  });
});

test('should not improperly mark cage as invalid', () => {
  const action = {
    type: 'UPDATE_CELL',
    row: 0,
    column: 1,
    value: 5,
    fixed: expect.any(Boolean)
  };
  const state = boardReducer(partialValidBoard, action);
  expect(state[3][0]).toEqual({
    value: expect.any(Number),
    valid: true,
    fixed: expect.any(Boolean)
  });
});
