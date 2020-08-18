// SCORE: 10/10
function pageCount(n, p) {
  const mid = Math.floor(n / 2)

  if (p <= mid) {
    return Math.floor(p / 2)
  } else {
    return n % 2 === 0 ? Math.floor((n - p + 1) / 2) : Math.floor((n - p) / 2)
  }
}
