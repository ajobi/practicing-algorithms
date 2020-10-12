// SCORE: 25/25
function makeAnagram(a, b) {
  let map = {}

  for (let char of a) {
    if (map[char] === undefined) {
      map[char] = {}
    }

    map[char].countA = (map[char].countA || 0) + 1
  }

  for (let char of b) {
    if (map[char] === undefined) {
      map[char] = {}
    }

    map[char].countB = (map[char].countB || 0) + 1
  }

  let result = 0

  for (let charData in map) {
    const countA = map[charData].countA || 0
    const countB = map[charData].countB || 0

    result += Math.abs(countA - countB)
  }

  return result
}
