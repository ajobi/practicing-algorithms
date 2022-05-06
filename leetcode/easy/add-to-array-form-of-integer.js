var addToArrayForm = function(num, k) {
  let position = 10

  num.reverse()

  let j = 0
  let remainder = 0
  while (k > 0 || j < num.length) {
    const nextKDigit = k % position
    k = Math.floor(k / position)

    const sum = (num[j] || 0) + remainder + nextKDigit

    remainder = Math.floor(sum / 10)
    num[j] = sum % 10
    j++
  }

  if (remainder) {
    num.push(remainder)
  }

  return num.reverse()
};
