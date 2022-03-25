// SCORE: 100% correctness, 100% performance
function solution(X, A) {
  const positions = []

  let coveredPositions = 0
  for (let i = 0; i < A.length; i++) {
    if (positions[A[i]] === undefined) {
      positions[A[i]] = 1
      coveredPositions++

      if (coveredPositions >= X) {
        return i
      }
    }
  }

  return -1
}
