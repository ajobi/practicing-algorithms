// SCORE: 100% correctness, 100% performance
function solution(A) {
  let globalMin = 200000
  let localMin = 200000

  let globalMax = 0
  let localMax = 0

  for (let i = 0; i < A.length; i++) {
    if (A[i] < localMin) {
      localMin = A[i]
      localMax = 0
    } else if (A[i] > localMax) {
      localMax = A[i]
    }

    if (localMax - localMin > globalMax - globalMin) {
      globalMin = localMin
      globalMax = localMax
    }
  }

  return Math.max(globalMax - globalMin, 0)
}
