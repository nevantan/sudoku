export default (board, row) => {
  let found = [];
  return board[row].reduce((acc, cell) => {
    if (!acc) return acc;
    if (cell.value === 0) return true;
    if (!found[cell.value]) {
      found[cell.value] = true;
      return true;
    }
    return false;
  }, true);
};
