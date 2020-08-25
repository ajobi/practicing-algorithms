// SCORE: 20/20
function permutationEquation(p) {
  let valueToIndex = []

  for (let i = 0; i < p.length; i++) {
    valueToIndex[p[i]] = i + 1
  }

  let result = []

  for (let i = 1; i <= p.length; i++) {
    result.push(valueToIndex[valueToIndex[i]])
  }

  return result
}
