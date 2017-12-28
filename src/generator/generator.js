import Sudoku from 'sudoku';

const getPuzzle = () => {
  console.log('generate');
  const puzzle = [];
  let row = [];
  Sudoku.makepuzzle().forEach(cell => {
    if (cell == null) {
      row.push({
        value: 0,
        valid: true,
        fixed: false
      });
    } else {
      row.push({
        value: cell + 1,
        valid: true,
        fixed: true
      });
    }
    if (row.length == 9) {
      puzzle.push(row);
      row = [];
    }
  });
  return puzzle;
};

export { getPuzzle };
