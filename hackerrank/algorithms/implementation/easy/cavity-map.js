// SCORE: 30/30
function cavityMap(grid) {
  const result = grid.slice()

  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
      if (grid[i][j] > grid[i][j - 1] &&
        grid[i][j] > grid[i][j + 1] &&
        grid[i][j] > grid[i - 1][j] &&
        grid[i][j] > grid[i + 1][j]) {
        const targetRow = result[i].split('')
        targetRow[j] = 'X'
        result[i] = targetRow.join('')
      }
    }
  }

  return result
}
