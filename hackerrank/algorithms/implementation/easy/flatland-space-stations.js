// SCORE: 25/25
function flatlandSpaceStations(n, c) {
  c.sort((a, b) => a - b)

  let maxDistance = 0
  for (let i = 1; i < c.length; i++) {
    maxDistance = Math.max(maxDistance, Math.floor(Math.abs(c[i] - c[i - 1]) / 2))
  }

  return Math.max(
    maxDistance,
    Math.floor(c[0]),
    Math.floor(n - 1 - c[c.length - 1])
  )
}
