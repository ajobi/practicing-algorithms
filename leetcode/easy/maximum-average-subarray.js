var findMaxAverage = function(nums, k) {
  let sums = []

  for (let i = 0; i < nums.length; i++) {
    sums[i] = (sums[i - 1] || 0) + nums[i]
  }

  let max = Number.MIN_SAFE_INTEGER

  sums.unshift(0)

  for (let i = 0; i < sums.length - k; i++) {
    max = Math.max(max, (sums[i + k] - sums[i]) / k)
  }

  return max
};
