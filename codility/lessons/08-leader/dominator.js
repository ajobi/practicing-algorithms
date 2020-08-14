// SCORE: 100% correctness, 100% performance
function solution(A) {
  const counter = []

  for (let i = 0; i < A.length; i++) {
    counter[A[i]] = (counter[A[i]] || 0) + 1
    if (counter[A[i]] > (A.length / 2)) {
      return i
    }
  }

  return -1
}
