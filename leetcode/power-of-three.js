var isPowerOfThree = function(n) {
  let current = 1

  while (current <= n) {
    if (current === n) {
      return true
    }

    current *= 3
  }

  return false
};
