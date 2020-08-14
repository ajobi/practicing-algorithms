// SCORE: 100% correctness, 100% performance
function solution(A) {
  const occurenceFlags = []

  for (let i = 0; i < A.length; i++) {
    occurenceFlags[A[i]] = 1
  }

  for (let i = 1; i < A.length + 2; i++) {
    if (occurenceFlags[i] === undefined) {
      return i
    }
  }
}
