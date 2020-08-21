// SCORE: 20/20
// Note: original "serviceLane" function missed the "width" parameter
function serviceLane(n, width, cases) {
  const results = []

  for (let lane of cases) {
    const [start, end] = lane
    results.push(Math.min(...width.slice(start, end + 1)))
  }

  return results
}
