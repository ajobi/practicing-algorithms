// SCORE: 100% correctness, 100% performance
function solution(H) {
  const stack = []
  let stackSum = 0
  let blockCount = 0

  for (let height of H) {
    if (height === stackSum) {
      continue;
    }

    if (height > stackSum) {
      stack.push(height - stackSum)
      stackSum += height - stackSum
      blockCount++
    }

    if (height < stackSum) {
      while (stackSum > height) {
        stackSum -= stack.pop()
      }

      if (height === stackSum) {
        continue;
      }

      if (height > stackSum) {
        stack.push(height - stackSum)
        stackSum += height - stackSum
        blockCount++
      }
    }
  }

  return blockCount
}
