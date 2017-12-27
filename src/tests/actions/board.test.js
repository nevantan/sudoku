import { updateCell } from '../../actions/board.js';

test('should correctly generation UpdateCell action object', () => {
  const row = 0;
  const column = 0;
  const value = 1;
  const action = updateCell(row, column, value);
  expect(action).toEqual({
    type: 'UPDATE_CELL',
    row,
    column,
    value
  });
});
