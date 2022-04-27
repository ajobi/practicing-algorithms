var firstUniqChar = function(s) {
  const occurenceMap = {}

  for (const char of s) {
    occurenceMap[char] = (occurenceMap[char] || 0) + 1
  }

  for (let i = 0; i < s.length; i++) {
    if (occurenceMap[s[i]] === 1) {
      return i
    }
  }

  return -1
};
