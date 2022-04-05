// SCORE: 100% correctness, 100% performance
function solution(A) {
  const sortedDiscs = A.map((radius, x) => ({
    left: x - radius,
    right: x + radius
  })).sort((a, b) => a.left - b.left)

  let result = 0
  for (let i = 0; i < sortedDiscs.length - 1; i++) {
    for (let j = i + 1; j < sortedDiscs.length; j++) {
      if (sortedDiscs[j].left <= sortedDiscs[i].right) {
        result++

        if (result > 10000000) {
          return -1
        }
      } else {
        break
      }
    }
  }

  return result
}
