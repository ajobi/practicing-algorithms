var findTheDifference = function(s, t) {
  const first = s.split('').sort()
  const second = t.split('').sort()

  for (let i = 0; i < second.length; i++) {
    if (second[i] !== first[i]) {
      return second[i]
    }
  }
};
