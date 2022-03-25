// SCORE: 100% correctness, 100% performance
function solution(A) {
  const counter = []

  for (let i = 0; i < A.length; i++) {
    counter[A[i]] = counter[A[i]] === undefined ? 1 : counter[A[i]] + 1
  }

  for (let i = 1; i <= A.length; i++) {
    if (counter[i] !== 1) {
      return 0
    }
  }

  return 1
}
