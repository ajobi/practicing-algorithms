function twoStrings(s1, s2) {
  const mapOne = {}
  const mapTwo = {}

  for (let char of s1) {
    mapOne[char] = true
  }

  for (let char of s2) {
    mapTwo[char] = true
  }

  for (let property in mapOne) {
    if (mapTwo.hasOwnProperty(property)) {
      return 'YES'
    }
  }

  return 'NO'
}
