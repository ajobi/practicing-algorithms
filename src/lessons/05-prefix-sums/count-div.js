// SCORE: 100% correctness, 100% performance
function solution(A, B, K) {
  const first = A % K === 0 ? A : A + K - (A % K)
  const range = B - first

  return range < 0 ? 0 : 1 + Math.floor(range / K)
}
