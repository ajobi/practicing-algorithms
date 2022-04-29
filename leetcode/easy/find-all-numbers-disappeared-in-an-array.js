var findDisappearedNumbers = function(nums) {
  const appearanceFlags = {}

  for (let i = 0; i < nums.length; i++) {
    appearanceFlags[nums[i]] = true
  }

  const disappeared = []
  for (let i = 1; i <= nums.length; i++) {
    if (!appearanceFlags[i]) {
      disappeared.push(i)
    }
  }

  return disappeared
};
