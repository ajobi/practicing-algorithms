// SCORE: 100% correctness, 100% performance
function solution(A, B) {
  const downstream = []
  const upstream = []

  for (let i = 0; i < A.length; i++) {
    if (B[i] === 1) {
      downstream.push(A[i])
      continue;
    }

    while(downstream.length > 0 && downstream[downstream.length - 1] < A[i]) {
      downstream.pop()
    }

    if (downstream.length === 0) {
      upstream.push(A[i])
    }
  }

  return downstream.length + upstream.length
}
