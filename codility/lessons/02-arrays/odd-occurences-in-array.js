// SCORE: 100% correctness, 100% performance
function solution(A) {
  const occurrences = {}

  A.forEach(number => {
    occurrences[number] = occurrences[number] === undefined ? 1 : occurrences[number] + 1
  })

  for (let i = 0; i < A.length; i++) {
    if (occurrences[A[i]] % 2 === 1) {
      return A[i]
    }
  }
}
