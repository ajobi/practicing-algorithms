var findMaxConsecutiveOnes = function(nums) {
  let max = 0
  let currentSeries = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      while (nums[i] === 1) {
        currentSeries++
        i++
      }

      max = Math.max(max, currentSeries)
      currentSeries = 0
    }
  }

  return max
};
