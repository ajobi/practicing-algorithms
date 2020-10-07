// SCORE: 15/15
function hourglassSum(arr) {
  const sums = []

  for (let row = 0; row <= 3; row++) {
    for (let col = 1; col <= 4; col++) {
      const currentSum =
        arr[row][col - 1] + arr[row][col] + arr[row][col + 1] +
        arr[row + 1][col] +
        arr[row + 2][col - 1] + arr[row + 2][col] + arr[row + 2][col + 1]

      sums.push(currentSum)
    }
  }

  return Math.max(...sums)
}
