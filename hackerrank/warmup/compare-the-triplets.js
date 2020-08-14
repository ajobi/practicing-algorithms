// SCORE: 10/10
function compareTriplets(a, b) {
  let scoreAlice = 0;
  let scoreBob = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      scoreAlice++
      continue;
    }

    if (a[i] < b[i]) {
      scoreBob++
    }
  }

  return [scoreAlice, scoreBob]
}
