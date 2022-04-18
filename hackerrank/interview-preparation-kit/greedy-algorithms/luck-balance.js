// SCORE: 20/20
function luckBalance(k, contests) {
  contests.sort((a, b) => b[0] - a[0])

  let result = 0;

  for (let i = 0; i < contests.length; i++) {
    if (contests[i][1] === 0) {
      result += contests[i][0]
      continue;
    }

    if (k > 0) {
      result += contests[i][0]
      k--
      continue
    }

    result -= contests[i][0]
  }

  return result
}
