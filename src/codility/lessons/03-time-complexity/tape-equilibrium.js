// SCORE: 100% correctness, 100% performance
function solution(A) {
  const sums = [A[0]]

  for (let i = 1; i < A.length; i++) {
    sums[i] = sums[i - 1] + A[i]
  }

  let minDiff = Number.MAX_SAFE_INTEGER
  for (let i = 1; i < sums.length; i++) {
    const sumLeft = sums[i - 1]
    const sumRight = sums[sums.length - 1] - sumLeft
    const diff = Math.abs(sumLeft - sumRight)
    minDiff = diff < minDiff ? diff : minDiff
  }

  return minDiff
}
