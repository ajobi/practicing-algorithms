var dominantIndex = function(nums) {
  let max = Number.MIN_SAFE_INTEGER
  let maxIndex = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i]
      maxIndex = i
    }
  }

  return nums.every(num => num === max || num * 2 <= max) ? maxIndex : -1
};
