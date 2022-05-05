var containsPattern = function(arr, m, k) {
  let matchingChars = 0

  for (let i = 0; i < arr.length - m; i++) {
    if (arr[i] !== arr[i + m]) {
      matchingChars = 0
      continue
    }

    if (arr[i] === arr[i + m]) {
      matchingChars++
    }

    if (matchingChars >= (k - 1) * m) {
      return true
    }
  }

  return false
};
