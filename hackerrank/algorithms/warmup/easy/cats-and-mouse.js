// SCORE: 15/15
function catAndMouse(x, y, z) {
  const catOneDistance = Math.abs(x - z)
  const catTwoDistance = Math.abs(y - z)

  if (catOneDistance < catTwoDistance) {
    return 'Cat A'
  }

  if (catOneDistance > catTwoDistance) {
    return 'Cat B'
  }

  return 'Mouse C'
}
