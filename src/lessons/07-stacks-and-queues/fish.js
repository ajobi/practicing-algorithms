// SCORE: 100% correctness, 100% performance
function solution(A, B) {
  const stack = []

  for (let i = 0; i < A.length; i++) {
    if (B[i] === 1) {
      stack.push(i)
    } else {
      while (true) {
        let prev = stack[stack.length - 1]
        if (prev === undefined || B[prev] === 0) {
          stack.push(i)
          break
        }

        if (B[prev] === 1 && A[prev] < A[i]) {
          stack.pop()
        }

        if (B[prev] === 1 && A[prev] >= A[i]) {
          break
        }
      }
    }
  }

  return stack.length
}
