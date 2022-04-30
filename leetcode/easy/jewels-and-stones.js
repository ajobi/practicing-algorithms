var numJewelsInStones = function(jewels, stones) {
  const stoneOccurrences = {}

  for (let stone of stones) {
    stoneOccurrences[stone] = (stoneOccurrences[stone] || 0) + 1
  }

  let result = 0

  for (let jewel of jewels) {
    result += stoneOccurrences[jewel] || 0
  }

  return result
};
