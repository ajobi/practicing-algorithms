// SCORE: 15/15
function minimumAbsoluteDifference(arr) {
  arr.sort((a, b) => a - b)

  let minDistance = Number.MAX_SAFE_INTEGER

  for (let i = 1; i < arr.length; i++) {
    minDistance = Math.min(minDistance, Math.abs(arr[i] - arr[i - 1]))
  }

  return minDistance
}
