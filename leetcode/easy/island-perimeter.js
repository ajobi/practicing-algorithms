var islandPerimeter = function(grid) {
  let perimeter = 0

  const maxBlockPerimeter = 4

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) {
        continue
      }

      const neighborBlocks =
        (grid[i - 1]?.[j] || 0) +
        (grid[i][j - 1] || 0) +
        (grid[i][j + 1] || 0) +
        (grid[i + 1]?.[j] || 0)

      perimeter += maxBlockPerimeter - neighborBlocks
    }
  }

  return perimeter
};
