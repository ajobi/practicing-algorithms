var addStrings = function(num1, num2) {
  const result = []

  const one = num1.split('').reverse()
  const two = num2.split('').reverse()

  let i = 0
  let remainder = 0
  while (i < one.length || i < two.length) {
    const digitOne = parseInt(one[i] || 0)
    const digitTwo = parseInt(two[i] || 0)

    const sum = digitOne + digitTwo + remainder
    remainder = Math.floor(sum / 10)
    result.push((sum % 10).toString())

    i++
  }

  if (remainder) {
    result.push(remainder.toString())
  }

  return result.reverse().join('')
};
