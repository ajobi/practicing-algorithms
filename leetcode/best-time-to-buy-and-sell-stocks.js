var maxProfit = function(prices) {
  if (prices.length < 2) {
    return 0
  }

  let result = 0;

  let min = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
    } else {
      result = Math.max(result, prices[i] - min)
    }
  }

  return result
};
