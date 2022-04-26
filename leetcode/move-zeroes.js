var moveZeroes = function(nums) {
  let zeroesMoved = 0

  for (let i = 0; i < nums.length - zeroesMoved; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
      i--
      zeroesMoved++
    }
  }
};
