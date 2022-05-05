var isPowerOfTwo = function(n) {
  if (n === 1) {
    return true
  }


  let remainder = n

  while (remainder > 2 && remainder % 2 === 0) {
    remainder = remainder / 2
  }

  return remainder === 2
};
