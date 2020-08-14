// SCORE: 20/20
function minimumDistances(a) {
  let lastIndexes = []
  let minDistance = a.length + 1

  for (let i = 0; i < a.length; i++) {
    const num = a[i]

    if (lastIndexes[num] !== undefined) {
      minDistance = Math.min(minDistance, i - lastIndexes[num])
    }

    lastIndexes[num] = i
  }

  return minDistance === a.length + 1 ? -1 : minDistance
}
