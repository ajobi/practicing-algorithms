var numDifferentIntegers = function(word) {
  const nums = word.replace(/[a-z]/g, ' ').trim().split(/\s+/g).filter(num => !!num)
  return [...new Set(nums.map(num => num.replace(/^0+/, '')))].length
};
