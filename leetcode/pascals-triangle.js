var generate = function(numRows) {
  const rows = []

  for (let i = 0; i < numRows; i++) {
    const lastRow = rows[rows.length - 1]

    if (!lastRow) {
      rows.push([1])
      continue
    }

    const newRow = []
    for (let j = 0; j < i + 1; j++) {
      newRow[j] = (lastRow[j - 1] || 0) + (lastRow[j] || 0)
    }

    rows.push(newRow)
  }

  return rows
};
