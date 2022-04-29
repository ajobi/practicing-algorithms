var isPalindrome = function(x) {
  const stringValue = x.toString()

  let i = 0;
  let j = stringValue.length - 1

  while (j >= 0) {
    if (stringValue[i++] !== stringValue[j--]) {
      return false
    }
  }

  return true
};
