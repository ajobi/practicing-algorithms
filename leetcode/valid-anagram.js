var isAnagram = function(s, t) {
  const sortedS = s.split('').sort()
  const sortedT = t.split('').sort()

  if (sortedS.length !== sortedT.length) {
    return false
  }

  for (let i = 0; i < sortedS.length; i++) {
    if (sortedS[i] !== sortedT[i]) {
      return false
    }
  }

  return true
};
