// SCORE: 100% correctness, 100% performance
function solution(A) {
  A.sort()

  let result = A.length === 0 ? 0 : 1

  for (let i = 1; i < A.length; i++) {
    if (A[i] !== A[i - 1]) {
      result++
    }
  }

  return result
}
