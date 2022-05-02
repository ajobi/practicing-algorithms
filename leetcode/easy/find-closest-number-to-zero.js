var findClosestNumber = function(nums) {
  let minDistance = Number.MAX_SAFE_INTEGER
  let result = null

  for (let num of nums) {
    if (Math.abs(num) < minDistance) {
      minDistance = Math.abs(num)
      result = num
      continue
    }

    if (Math.abs(num) === minDistance && num > result) {
      result = num
    }
  }

  return result
};
