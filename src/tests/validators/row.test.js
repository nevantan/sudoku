import rowValidator from '../../validators/row';
import {
  emptyBoard,
  partialValidBoard,
  partialInvalidBoard,
  fullValidBoard,
  fullInvalidBoard
} from '../fixtures/boards.js';

test('should return true when the row is empty', () => {
  const result = rowValidator(emptyBoard, 0);
  expect(result).toBe(true);
});

test('should return true when the row contains no duplicates (excluding 0)', () => {
  const result = rowValidator(partialValidBoard, 1);
  expect(result).toBe(true);
});

test('should return true when a full row contains no duplicates', () => {
  const result = rowValidator(fullValidBoard, 3);
  expect(result).toBe(true);
});

test('should return false when a row contains duplicates (excluding 0)', () => {
  const result = rowValidator(partialInvalidBoard, 0);
  expect(result).toBe(false);
});

test('should return false when a full row contains duplicates', () => {
  const result = rowValidator(fullInvalidBoard, 2);
  expect(result).toBe(false);
});
