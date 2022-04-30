var canConstruct = function(ransomNote, magazine) {
  const availableChars = {}

  for (let char of magazine) {
    availableChars[char] = (availableChars[char] || 0) + 1
  }

  for (let char of ransomNote) {
    if (!availableChars[char] || availableChars[char] === 0) {
      return false
    }

    availableChars[char] = availableChars[char] - 1
  }

  return true
};
