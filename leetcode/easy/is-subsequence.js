var isSubsequence = function(s, t) {
  let i = 0
  let j = 0

  while (i < s.length && j < t.length) {
    while (s[i] !== t[j] && j < t.length) {
      j++
    }

    if (s[i] === t[j]) {
      j++
      i++
    }
  }

  return i === s.length
};
