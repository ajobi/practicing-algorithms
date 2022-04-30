var matrixReshape = function(mat, r, c) {
  if (mat.length * mat[0].length !== r * c) {
    return mat
  }

  let result = []

  let k = 0
  let l = 0

  for (let i = 0; i < r; i++) {
    const row = []

    for (let j = 0; j < c; j++) {
      row.push(mat[k][l])

      if (l < mat[0].length - 1) {
        l++
      } else {
        k++
        l = 0
      }
    }

    result.push(row)
  }

  return result
};
