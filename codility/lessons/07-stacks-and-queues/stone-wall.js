// SCORE: 100% correctness, 100% performance
function solution(H) {
  let blockCount = 0
  let height = 0
  const stack = []

  for (let i = 0; i < H.length; i++) {
    while(height > H[i]) {
      height = height - stack[stack.length - 1]
      stack.pop()
    }

    if (height < H[i]) {
      stack.push(H[i] - height)
      height = height + stack[stack.length - 1]
      blockCount++
    }
  }

  return blockCount
}
