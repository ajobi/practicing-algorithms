// SCORE: 10/10
function diagonalDifference(arr) {
  let sumOne = 0;
  let sumTwo = 0;

  for (let i = 0; i < arr.length; i++) {
    sumOne += arr[i][i]
    sumTwo += arr[i][arr.length - i - 1]
  }

  return Math.abs(sumOne - sumTwo)
}
