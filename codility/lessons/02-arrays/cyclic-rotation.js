// SCORE: 100% correctness, performance not assessed for this lesson
function solution(A, K) {
  const result = []

  for (let i = 0; i < A.length; i++) {
    result[(i + K) % A.length] = A[i]
  }

  return result
}
