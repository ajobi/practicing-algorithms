// SCORE: 10/10
function miniMaxSum(arr) {
  arr.sort((a, b) => a - b)

  let min = 0
  let max = 0

  for (let i = 0; i < arr.length; i++) {
    if (i < 4) {
      min += arr[i]
    }

    if (i > 0) {
      max += arr[i]
    }
  }

  console.log(`${min} ${max}`)
}
