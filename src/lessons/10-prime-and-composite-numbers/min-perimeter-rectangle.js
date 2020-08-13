// SCORE: 100% correctness, 100% performance
function solution(N) {
  let minPerimeter = Number.MAX_SAFE_INTEGER

  for (let i = 1; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      minPerimeter = Math.min(minPerimeter, 2 * (i + (N / i)))
    }
  }

  return minPerimeter
}
