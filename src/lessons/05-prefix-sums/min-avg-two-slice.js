// SCORE: 100% correctness, 100% performance
function solution(A) {
  let minAverage = Number.MAX_SAFE_INTEGER
  let minPosition = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < A.length - 1; i++) {
    const twoSliceAvg = (A[i] + A[i + 1]) / 2
    const threeSliceAvg = A[i + 2] ? (A[i] + A[i + 1] + A[i + 2]) / 3 : Number.MAX_SAFE_INTEGER

    if (twoSliceAvg < minAverage) {
      minAverage = twoSliceAvg
      minPosition = i
    }

    if (threeSliceAvg < minAverage) {
      minAverage = threeSliceAvg
      minPosition = i
    }
  }

  return minPosition
}
