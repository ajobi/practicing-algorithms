// SCORE: 100% correctness, 100% performance
function solution(S) {
  const stack = []

  if (S.length === 0) {
    return 1
  }

  for (let char of S) {
    if (char === '(') {
      stack.push(char)
      continue
    }

    if (char === ')' && stack[stack.length - 1] === '(') {
      stack.pop()
      continue
    }

    return 0
  }

  if (stack.length > 0) {
    return 0
  }

  return 1
}
