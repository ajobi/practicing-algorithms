var longestPalindrome = function(s) {
  const appearances = {}

  for (let char of s) {
    appearances[char] = (appearances[char] || 0) + 1
  }

  let remainder = 0
  let length = 0

  for (let char in appearances) {
    remainder = remainder || appearances[char] % 2
    length += appearances[char] - appearances[char] % 2
  }

  return length + remainder
};
