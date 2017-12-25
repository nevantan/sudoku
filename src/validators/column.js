export default (board, column) => {
  const found = [];
  return board.reduce((acc, row) => {
    if (!acc) return acc;
    if (row[column].value === 0) return true;
    if (!found[row[column].value]) {
      found[row[column].value] = true;
      return true;
    }
    return false;
  }, true);
};
