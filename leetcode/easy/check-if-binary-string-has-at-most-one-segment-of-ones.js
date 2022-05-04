var checkOnesSegment = function(s) {
  s = s + '0'

  let segmentCount = 0

  for (let i = 1; i < s.length; i++) {
    if (s[i] === '0' && s[i - 1] === '1') {
      segmentCount++
    }

    if (segmentCount > 1) {
      return false
    }
  }

  return segmentCount <= 1
};
