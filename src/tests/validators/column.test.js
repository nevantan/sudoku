import columnValidator from '../../validators/column';
import {
  emptyBoard,
  partialValidBoard,
  partialInvalidBoard,
  fullValidBoard,
  fullInvalidBoard
} from '../fixtures/boards.js';

test('should return true when the column is empty', () => {
  const result = columnValidator(emptyBoard, 0);
  expect(result).toBe(true);
});

test('should return true when the column contains no duplicates (excluding 0)', () => {
  const result = columnValidator(partialValidBoard, 1);
  expect(result).toBe(true);
});

test('should return true when a full row contains no duplicates', () => {
  const result = columnValidator(fullValidBoard, 3);
  expect(result).toBe(true);
});

test('should return false when a row contains duplicates (excluding 0)', () => {
  const result = columnValidator(partialInvalidBoard, 0);
  expect(result).toBe(false);
});

test('should return false when a full row contains duplicates', () => {
  const result = columnValidator(fullInvalidBoard, 0);
  expect(result).toBe(false);
});
