// SCORE: 100% correctness, 100% performance
function solution(A) {
  const occurrenceFlag = []

  for (let i = 0; i < A.length; i++) {
    occurrenceFlag[A[i]] = 1
  }

  for (let i = 1; i <= A.length; i++) {
    if (occurrenceFlag[i] !== 1) {
      return i
    }
  }

  return A.length + 1
}
