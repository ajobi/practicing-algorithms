var searchInsert = function(nums, target) {
  const index = nums.indexOf(target)

  if (index !== -1) {
    return index
  }

  nums.push(target)
  nums.sort((a, b) => a - b)

  return nums.indexOf(target)
};
