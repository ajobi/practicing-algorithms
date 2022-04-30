var validPalindrome = function(s) {
  const process = (s, l, r, charDeleted) => {
    while (l < r) {
      if (s[l] === s[r]) {
        l++
        r--
        continue
      }

      if (charDeleted) {
        return false
      }

      return process(s, l + 1, r, true) || process(s, l, r - 1, true)
    }

    return true
  }
  return process(s, 0, s.length - 1, false)
};
