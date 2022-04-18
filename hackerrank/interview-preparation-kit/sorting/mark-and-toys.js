// SCORE: 35/35
function maximumToys(prices, k) {
  prices.sort((a, b) => a - b)

  let bought = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] <= k) {
      bought++
      k -= prices[i]
    } else {
      return bought
    }
  }

  return bought
}
