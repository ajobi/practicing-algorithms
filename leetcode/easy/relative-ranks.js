var findRelativeRanks = function(score) {
  const scoreToIndex = {}

  for (let i = 0; i < score.length; i++) {
    scoreToIndex[score[i]] = i
  }

  score.sort((a, b) => b - a)

  let result = []

  for (let i = 0; i < score.length; i++) {
    const indexToRank = {
      0: 'Gold Medal',
      1: 'Silver Medal',
      2: 'Bronze Medal',
    }

    result[scoreToIndex[score[i]]] = indexToRank[i] || (i + 1).toString()
  }

  return result
};
