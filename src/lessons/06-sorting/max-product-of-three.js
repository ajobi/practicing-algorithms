// SCORE: 100% correctness, 100% performance
function solution(A) {
  A.sort((a, b) => a - b)

  return Math.max(A[0] * A[1] * A[A.length - 1], A[A.length - 1] * A[A.length - 2] * A[A.length - 3])
}
