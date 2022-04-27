var maxSubArray = function(nums) {
  if (nums.length === 1) {
    return nums[0]
  }

  const center = Math.floor(nums.length / 2)
  const left = nums.slice(0, center)
  const right = nums.slice(center)

  let toLeftMax = Number.MIN_SAFE_INTEGER
  let currentSum = 0

  for (let i = left.length - 1; i >= 0; i--) {
    currentSum += left[i]
    toLeftMax = Math.max(toLeftMax, currentSum)
  }

  let toRightMax = Number.MIN_SAFE_INTEGER
  currentSum = 0

  for (let i = 0; i < right.length; i++) {
    currentSum += right[i]
    toRightMax = Math.max(toRightMax, currentSum)
  }

  return Math.max(maxSubArray(left), maxSubArray(right), toRightMax, toLeftMax, toRightMax + toLeftMax)
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
