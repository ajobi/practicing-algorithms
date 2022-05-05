var repeatedSubstringPattern = function(s) {
  let i = 1

  while (i < s.length) {
    if (s.length % i !== 0) {
      i++
      continue
    }

    const appearances = s.length / i
    const checkArray = new Array(appearances).fill(s.slice(0, i))

    if (checkArray.join('') === s) {
      return true
    }

    i++
  }

  return false
};
