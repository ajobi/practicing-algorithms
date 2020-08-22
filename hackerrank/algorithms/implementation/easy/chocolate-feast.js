// SCORE: 25/25
function chocolateFeast(n, c, m) {
  let total = Math.floor(n / c)
  let wrappers = total

  while (wrappers >= m) {
    let chocolates = Math.floor(wrappers / m)
    wrappers = wrappers % m + chocolates
    total += chocolates
  }

  return total
}
