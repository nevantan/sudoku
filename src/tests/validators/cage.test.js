import cageValidator, { selectCage } from '../../validators/cage';
import {
  emptyBoard,
  partialValidBoard,
  partialInvalidBoard,
  fullValidBoard,
  fullInvalidBoard
} from '../fixtures/boards.js';

test('should select correct cells for cage 1', () => {
  const cageCells = selectCage(partialValidBoard, 1);
  expect(cageCells).toEqual([
    partialValidBoard[0][3],
    partialValidBoard[0][4],
    partialValidBoard[0][5],
    partialValidBoard[1][3],
    partialValidBoard[1][4],
    partialValidBoard[1][5],
    partialValidBoard[2][3],
    partialValidBoard[2][4],
    partialValidBoard[2][5]
  ]);
});

test('should select correct cells for cage 3', () => {
  const cageCells = selectCage(partialValidBoard, 3);
  expect(cageCells).toEqual([
    partialValidBoard[3][0],
    partialValidBoard[3][1],
    partialValidBoard[3][2],
    partialValidBoard[4][0],
    partialValidBoard[4][1],
    partialValidBoard[4][2],
    partialValidBoard[5][0],
    partialValidBoard[5][1],
    partialValidBoard[5][2]
  ]);
});

test('should return true when the cage is empty', () => {
  const result = cageValidator(emptyBoard, 0);
  expect(result).toBe(true);
});

test('should return true when the cage contains no duplicates (excluding 0)', () => {
  const result = cageValidator(partialValidBoard, 1);
  expect(result).toBe(true);
});

test('should return true when a full cage contains no duplicates', () => {
  const result = cageValidator(fullValidBoard, 3);
  expect(result).toBe(true);
});

test('should return false when a cage contains duplicates (excluding 0)', () => {
  const result = cageValidator(partialInvalidBoard, 0);
  expect(result).toBe(false);
});

test('should return false when a full cage contains duplicates', () => {
  const result = cageValidator(fullInvalidBoard, 0);
  expect(result).toBe(false);
});
