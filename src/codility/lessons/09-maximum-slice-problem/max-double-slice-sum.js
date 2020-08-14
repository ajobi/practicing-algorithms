// SCORE: 100% correctness, 100% performance
function solution(A) {
  let leftMaxes = []
  let rightMaxes = []

  for (let i = 1; i < A.length - 1; i++) {
    leftMaxes[i - 1] = Math.max((leftMaxes[i - 2] || 0) + A[i], A[i])
  }

  for (let i = A.length - 2; i > 0; i--) {
    rightMaxes[i - 1] = Math.max((rightMaxes[i] || 0) + A[i], A[i])
  }

  let max = 0

  for (let i = 0; i < leftMaxes.length; i++) {
    const previous = leftMaxes[i - 1] || 0
    const next = rightMaxes[i + 1] || 0
    max = Math.max(max, previous, next, previous + next)
  }

  return max
}
