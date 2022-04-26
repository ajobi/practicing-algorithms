var containsDuplicate = function(nums) {
  const uniqueNums = [...new Set(nums)]

  return uniqueNums.length < nums.length
};
