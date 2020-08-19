// SCORE: 15/15
function hurdleRace(k, height) {
  const deficit = Math.max(...height) - k

  return deficit > 0 ? deficit : 0
}
