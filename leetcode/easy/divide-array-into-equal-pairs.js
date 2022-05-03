var divideArray = function(nums) {
  const digitCounts = {}

  for (let num of nums) {
    digitCounts[num] = (digitCounts[num] || 0) + 1
  }

  for (let key in digitCounts) {
    if (digitCounts[key] % 2 !== 0) {
      return false
    }
  }

  return true
};
