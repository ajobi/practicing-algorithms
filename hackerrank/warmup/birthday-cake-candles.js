// SCORE: 10/10
function birthdayCakeCandles(ar) {
  let max = 0;
  let maxCount = 0

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] > max) {
      max = ar[i]
      maxCount = 1
      continue;
    }

    if (ar[i] === max) {
      maxCount++
    }
  }

  return maxCount
}
