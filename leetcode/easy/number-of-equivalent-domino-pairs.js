var numEquivDominoPairs = function(dominoes) {
  let result = 0

  for (let i = 0; i < dominoes.length - 1; i++) {
    for (let j = i + 1; j < dominoes.length; j++) {
      const first = dominoes[i]
      const second = dominoes[j]

      if ((first[0] === second[0] && first[1] === second[1])
        || first[0] === second[1] && first[1] === second[0]) {
        result++
      }
    }
  }

  return result
};
