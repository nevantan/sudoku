export default (board, cage) => {
  const cells = selectCage(board, cage);
  const found = [];
  return cells.reduce((acc, cell) => {
    if (!acc) return acc;
    if (cell.value === 0) return true;
    if (!found[cell.value]) {
      found[cell.value] = true;
      return true;
    }
    return false;
  }, true);
};

const selectCage = (board, cage) => {
  return board.reduce((acc, row, i) => {
    const startRow = Math.floor(cage / 3) * 3;
    if (i >= startRow && i < startRow + 3) {
      const startCol = (cage - Math.floor(cage / 3) * 3) * 3;
      row.forEach((cell, j) => {
        if (j >= startCol && j < startCol + 3) {
          acc.push(cell);
        }
      });
    }
    return acc;
  }, []);
};

export { selectCage };
