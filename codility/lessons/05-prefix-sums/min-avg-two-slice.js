// SCORE: 100% correctness, 100% performance
function solution(A) {
  let minSliceAverage = Number.MAX_SAFE_INTEGER
  let minPosition = A.length - 1

  for (let i = 0; i < A.length - 1; i++) {
    const sliceAvg = (A[i] + A[i + 1]) / 2

    if (sliceAvg < minSliceAverage) {
      minPosition = i
      minSliceAverage = sliceAvg
    }
  }

  for (let i = 0; i < A.length - 2; i++) {
    const sliceAvg = (A[i] + A[i + 1] + A[i + 2]) / 3

    if (sliceAvg < minSliceAverage) {
      minPosition = i
      minSliceAverage = sliceAvg
    }
  }

  return minPosition
}
