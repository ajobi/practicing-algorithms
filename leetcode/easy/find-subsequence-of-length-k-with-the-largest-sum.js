var maxSubsequence = function(nums, k) {
  const metaNums = []

  for (let i = 0; i < nums.length; i++) {
    metaNums.push([i, nums[i]])
  }

  metaNums.sort((a, b) => b[1] - a[1])

  const resultMeta = metaNums.slice(0, k)

  return resultMeta.sort((a, b) => a[0] - b[0]).map(item => item[1])
};
