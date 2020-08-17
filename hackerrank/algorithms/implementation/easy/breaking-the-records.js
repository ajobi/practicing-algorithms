// SCORE: 10/10
function breakingRecords(scores) {
  let max = scores[0]
  let min = scores[0]
  let maxBroken = 0;
  let minBroken = 0;

  for (let i = 1; i < scores.length; i++) {
    const score = scores[i]

    if (score > max) {
      max = score
      maxBroken++
      continue
    }

    if (score < min) {
      min = score
      minBroken++
    }
  }

  return [maxBroken, minBroken]
}
