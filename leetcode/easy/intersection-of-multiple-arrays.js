var intersection = function(nums) {
  const allIntegers = [...new Set(nums.reduce((result, array) => [...result, ...array], []))]

  return allIntegers.filter(num => nums.every(array => array.includes(num))).sort((a, b) => a - b)
};
