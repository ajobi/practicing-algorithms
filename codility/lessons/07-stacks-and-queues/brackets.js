// SCORE: 100% correctness, 100% performance
function solution(S) {
  if (S.length === 0) {
    return 1
  }

  const stack = []
  const bracketMap = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  for (let char of S) {
    if (['(', '[', '{'].includes(char)) {
      stack.push(char)
      continue;
    }

    if (stack[stack.length - 1] === bracketMap[char]) {
      stack.pop()
      continue;
    }

    return 0
  }

  if (stack.length > 0) {
    return 0
  }

  return 1
}
