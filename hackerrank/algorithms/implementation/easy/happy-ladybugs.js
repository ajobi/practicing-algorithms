// SCORE: 30/30
function happyLadybugs(b) {
  const charMap = {}

  let allHappy = true
  let prev = null
  for (let i = 0; i < b.length; i++) {
    charMap[b[i]] = charMap[b[i]] === undefined ? 1 : charMap[b[i]] + 1

    if (!(b[i] !== '_' && (b[i] === b[i + 1] || b[i] === prev))) {
      allHappy = false
    }

    prev = b[i]
  }

  if (allHappy === true) {
    return 'YES'
  }

  if (charMap._ === undefined) {
    return 'NO'
  }

  for (let char in charMap) {
    if (char !== '_' && charMap[char] < 2) {
      return 'NO'
    }
  }

  return 'YES'
}
