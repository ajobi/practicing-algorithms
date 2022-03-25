// SCORE: 100% correctness, performance not assessed for this lesson
function solution(A, K) {
  const result = []

  for (let i = 0; i < A.length; i++) {
    const newIndex = i + K < A.length ? i + K : (K + i) % A.length
    result[newIndex] = A[i]
  }

  return result
}
