// SCORE: 100% correctness, performance not assessed for this lesson
function rotateOnce(A) {
  const result = []

  if (A.length > 0) {
    result[0] = A[A.length - 1]

    for (let i = 0; i < A.length - 1; i++) {
      result[i + 1] = A[i]
    }
  }

  return result
}

function solution(A, K) {
  let result = A

  for (let i = 0; i < K; i++) {
    result = rotateOnce(result)
  }

  return result
}
