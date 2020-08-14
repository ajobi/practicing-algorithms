// SCORE: 100% correctness, 100% performance
function solution(N, A) {
  const counters = new Array(N).fill(0)

  let maxCounter = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === N + 1 && A[i - 1] !== N + 1) {
      counters.fill(maxCounter)
      continue
    }

    if (A[i] !== N + 1) {
      counters[A[i] - 1]++
      maxCounter = counters[A[i] - 1] > maxCounter ? counters[A[i] - 1]: maxCounter
    }
  }

  return counters
}
