const updateCell = (row, column, value) => ({
  type: 'UPDATE_CELL',
  row,
  column,
  value
});

export { updateCell };
