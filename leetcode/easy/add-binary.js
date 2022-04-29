var addBinary = function(a, b) {
  let result = []

  let i = a.length - 1
  let j = b.length - 1

  let remainder = 0
  while (i >= 0 || j >= 0) {
    const posValue = parseInt(a[i--] || 0) + parseInt(b[j--] || 0) + remainder
    remainder = posValue < 2 ? 0 : 1

    result.push(posValue === 3 || posValue === 1 ? '1' : '0')
  }

  remainder && result.push('1')
  return result.reverse().join('')
};
