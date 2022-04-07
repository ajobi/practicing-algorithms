// SCORE: 100% correctness, 100% performance
function solution(S) {
  const stack = []

  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      stack.push('(')
      continue
    }

    if (stack.length === 0) {
      return 0
    } else {
      stack.pop()
    }
  }

  return stack.length === 0 ? 1 : 0
}
