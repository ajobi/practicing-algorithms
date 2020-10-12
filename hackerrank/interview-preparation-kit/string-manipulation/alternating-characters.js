// SCORE: 20/20
function alternatingCharacters(s) {
  let result = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      result++
    }
  }

  return result;
}
