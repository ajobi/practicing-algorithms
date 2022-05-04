var isUgly = function(n) {
  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2
      continue
    }

    if (n % 3 === 0) {
      n = n / 3
      continue
    }

    if (n % 5 === 0) {
      n = n / 5
      continue
    }

    return n === 1
  }

  return n === 1
};
