var singleNumber = function(nums) {
  const appearanceCount = {}

  for (let i = 0; i < nums.length; i++) {
    appearanceCount[nums[i]] = (appearanceCount[nums[i]] || 0) + 1
  }

  for (let key in appearanceCount) {
    if (appearanceCount[key] === 1) {
      return parseInt(key)
    }
  }
};
