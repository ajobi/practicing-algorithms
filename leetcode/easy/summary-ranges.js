var summaryRanges = function(nums) {
  const ranges = []

  let start = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] > 1) {
      ranges.push(start !== i ? `${nums[start]}->${nums[i]}` : nums[start].toString())
      start = i + 1
    }
  }

  if (start < nums.length) {
    ranges.push(start !== nums.length - 1 ? `${nums[start]}->${nums[nums.length - 1]}` : nums[start].toString())
  }

  return ranges
};
