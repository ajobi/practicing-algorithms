var majorityElement = function(nums) {
  const occurenceCount = {}

  for (let i = 0; i < nums.length; i++) {
    occurenceCount[nums[i]] = (occurenceCount[nums[i]] || 0) + 1

    if (occurenceCount[nums[i]] > nums.length / 2) {
      return nums[i]
    }
  }
};
