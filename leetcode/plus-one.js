var plusOne = function(digits) {
  let remainder = true
  for (let i = digits.length - 1; i >= 0; i--) {
    if (!remainder) {
      break;
    }

    if (digits[i] < 9) {
      remainder = false
      digits[i]++
      continue
    }

    digits[i] = 0
  }

  if (remainder) {
    digits.unshift(1)
  }

  return digits
};
