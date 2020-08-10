// SCORE: 100% correctness, 100% performance
function solution(A) {
  let distinctCounter = 0
  let countArray = []

  for (let num of A) {
    if (countArray[num] === undefined) {
      countArray[num] = 1
      distinctCounter++
    }
  }

  return distinctCounter
}
