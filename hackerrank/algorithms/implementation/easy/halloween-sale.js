// SCORE: 20/20
function howManyGames(p, d, m, s) {
  let result = 0;
  let cost = p

  while (s > 0) {
    s -= cost

    if (s >= 0) {
      result++
    }

    cost = (cost - d) > m ? cost - d : m
  }

  return result
}
