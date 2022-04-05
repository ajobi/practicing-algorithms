// SCORE: 100% correctness, 100% performance
function solution(S) {
  const stack = []

  const bracketsMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  }

  for (let i = 0; i < S.length; i++) {
    if (['(', '{', '['].includes(S[i])) {
      stack.push(S[i])
      continue
    }

    if (stack[stack.length - 1] === bracketsMap[S[i]]) {
      stack.pop()
      continue
    }

    return 0
  }

  return stack.length > 0 ? 0 : 1
}
