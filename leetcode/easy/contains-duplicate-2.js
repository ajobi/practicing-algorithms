var containsNearbyDuplicate = function (nums, k) {
  const valueToIndices = {}

  for (let i = 0; i < nums.length; i++) {
    valueToIndices[nums[i]] = valueToIndices[nums[i]] || []
    valueToIndices[nums[i]].push(i)
  }

  for (const key in valueToIndices) {
    for (let i = 1; i < valueToIndices[key].length; i++) {
      if (valueToIndices[key][i] - valueToIndices[key][i - 1] <= k) {
        return true
      }
    }
  }

  return false
};
