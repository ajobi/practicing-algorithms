// SCORE: 100% correctness, 100% performance
function solution(N) {
  let counter = 0;

  for (let i = 1; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      if (i * i === N) {
        counter = counter + 1
      } else {
        counter = counter + 2
      }
    }
  }

  return counter
}
