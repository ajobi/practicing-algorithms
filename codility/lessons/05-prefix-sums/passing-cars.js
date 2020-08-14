// SCORE: 100% correctness, 100% performance
function solution(A) {
  let passing = 0;
  let eastCount = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      eastCount++
    } else {
      passing = passing + eastCount
    }

    if (passing > 1000000000) {
      return -1
    }
  }

  return passing
}
