// SCORE: 15/15
function saveThePrisoner(n, m, s) {
  const moveBy = m - 1 >= n ? (m - 1) % n : (m - 1)
  return (s + moveBy > n) ? (s + moveBy - n) : s + moveBy
}
