// SCORE: 100% correctness, 100% performance
function solution(A) {
  const sorted = A.map((radius, index) => ({
    left: index - radius,
    right: index + radius
  })).sort((a, b) => a.left - b.left)

  let result = 0

  for (let i = 0; i < sorted.length; i++) {
    let j = i + 1
    while (sorted[j] && sorted[j].left <= sorted[i].right) {
      result++
      j++

      if (result > 10000000) {
        return -1
      }
    }
  }

  return result
}
