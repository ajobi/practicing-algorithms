var isHappy = function(n) {
  const valuesMap = new Map()

  let value = n

  while (value !== 1) {
    const digits = value.toString().split('').map(stringNum => parseInt(stringNum))

    value = digits.reduce((result, digit) => result + Math.pow(digit, 2), 0)

    if (valuesMap.has(value)) {
      return false
    }

    valuesMap.set(value, true)
  }

  return true
};
