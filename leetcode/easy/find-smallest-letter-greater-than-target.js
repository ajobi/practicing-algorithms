var nextGreatestLetter = function(letters, target) {
  for (const char of letters) {
    if (target < char) {
      return char
    }
  }

  for (const char of letters) {
    if ('a' <= char) {
      return char
    }
  }
};
