// SCORE: 100% correctness, 100% performance
function solution(A) {
  const counter = []

  for (let i = 0; i < A.length; i++) {
    counter[A[i] - 1] = counter[A[i] - 1] ? counter[A[i] - 1] + 1 : 1
  }

  for (let count of counter) {
    if (count !== 1) {
      return 0;
    }
  }

  return 1
}
