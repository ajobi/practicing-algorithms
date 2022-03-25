// SCORE: 100% correctness, 100% performance
function solution(A) {
  const occurrences = []

  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      occurrences[A[i]] = 1
    }
  }

  for (let i = 1; i < occurrences.length; i++) {
    if (occurrences[i] === undefined) {
      return i
    }
  }

  return occurrences.length === 0 ? 1 : occurrences.length
}
