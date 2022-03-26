// SCORE: 100% correctness, 100% performance
function solution(A) {
  let result = 0;

  const countWest = []

  for (let i = 0; i < A.length; i++) {
    countWest[i] = A[i] === 1 ? (countWest[i - 1] || 0) + 1 : (countWest[i - 1] || 0)
  }

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      result = result + (countWest[countWest.length - 1] - countWest[i])
    }
  }

  return result > 1000000000 ? -1 : result
}
