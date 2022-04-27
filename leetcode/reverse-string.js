var reverseString = function(s) {
  let temp = null

  for (let i = 0; i < s.length / 2; i++) {
    const newIndex = s.length - 1 - i

    temp = s[newIndex]
    s[newIndex] = s[i]
    s[i] = temp
  }
};
