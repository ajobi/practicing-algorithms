// SCORE: 100% correctness, 100% performance
function solution(A) {
  const indices = new Set()
  const occurences = []

  for (let i = 0; i < A.length; i++) {
    const value = A[i]

    occurences[value] = occurences[value] === undefined ? 1 : occurences[value] + 1
    indices.add(value)
  }

  for (let index of indices) {
    if (occurences[index] % 2 === 1) {
      return index
    }
  }

  return -1
}
