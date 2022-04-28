var permute = function(nums) {
  if (nums.length === 1) {
    return [[nums[0]]]
  }

  if (nums.length === 2) {
    return [[nums[0], nums[1]], [nums[1], nums[0]]]
  }

  return nums.map((num, index) => {
    let localNums = [...nums]
    localNums.splice(index, 1)
    localNums = [num, ...localNums]

    return permute(localNums.slice(1)).map(subPerm => [localNums[0], ...subPerm])
  }).flat()
};
