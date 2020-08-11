// SCORE: 100% correctness, 100% performance
function solution(A) {
  let maxLocal = A[0]
  let maxGlobal = A[0]

  for (let i = 1; i < A.length; i++) {
    maxLocal = Math.max(maxLocal + A[i], A[i])
    maxGlobal = Math.max(maxLocal, maxGlobal)
  }

  return maxGlobal
}
