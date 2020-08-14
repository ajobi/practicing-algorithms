// SCORE: 100% correctness, 100% performance
function solution(X, A) {
  const path = new Array(X).fill(0)
  let leafCount = 0;

  for (let i = 0; i < A.length; i++) {
    if (path[A[i] - 1] === 0) {
      path[A[i] - 1] = 1
      leafCount++
    }

    if (leafCount === X) {
      return i
    }
  }

  return -1
}
