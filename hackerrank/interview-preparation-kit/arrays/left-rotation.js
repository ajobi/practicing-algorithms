// SCORE: 20/20
function rotLeft(a, d) {
  const result = []

  for (let i = 0; i < a.length; i++) {
    if (i - d >= 0) {
      result[i - d] = a[i]
    } else {
      result[a.length + (i - d)] = a[i]
    }
  }

  return result
}
