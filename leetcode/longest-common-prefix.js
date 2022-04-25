var longestCommonPrefix = function(strs) {
  const prefixChars = []

  for (let i = 0; i < strs[0].length; i++) {
    if (strs.every(string => string[i] === strs[0][i])) {
      prefixChars.push(strs[0][i])
    } else {
      break
    }
  }

  return prefixChars.join('')
};
