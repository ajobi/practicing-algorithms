var isPowerOfFour = function(n) {
  if (n === 1) {
    return true
  }


  let remainder = n

  while (remainder > 4 && remainder % 4 === 0) {
    remainder = remainder / 4
  }

  return remainder === 4
};
