// SCORE: 15/15
function countingValleys(n, s) {
  let height = 0;
  let terrain = null
  let valleys = 0;

  for (let step of s) {
    height = step === 'U' ? height + 1 : height - 1

    if (height < 0 && (terrain === 'HILL' || !terrain)) {
      valleys++
    }

    if (height >= 0) {
      terrain = 'HILL'
    }

    if (height < 0) {
      terrain = 'VALLEY'
    }
  }

  return valleys
}
