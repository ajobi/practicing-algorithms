// SCORE: 10/10
function sockMerchant(n, ar) {
  let count = []

  for (let i = 0; i < n; i++) {
    count[ar[i]] = count[ar[i]] === undefined ? 1 : count[ar[i]] + 1
  }

  let result = 0;

  for (let i = 0; i < count.length; i++) {
    if (count[i] > 1) {
      result += Math.floor(count[i] / 2)
    }
  }

  return result
}
