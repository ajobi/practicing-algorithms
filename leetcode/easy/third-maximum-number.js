var thirdMaximumNumber = function(nums) {
  nums.sort((a, b) => b - a)
  nums = [...new Set(nums)]

  return nums.length > 2 ? nums[2] : nums[0]
};
