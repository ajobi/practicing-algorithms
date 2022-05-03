var check = function(nums) {
  let decreasing = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > (i < nums.length - 1 ? nums[i + 1] : nums[0])) {
      decreasing++
    }

    if (decreasing > 1) {
      return false
    }
  }

  return true
};
