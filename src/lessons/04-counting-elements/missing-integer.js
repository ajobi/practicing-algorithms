// SCORE: 100% correctness, 100% performance
function solution(A) {
  const counterArray = []

  for (let number of A) {
    if (number > 0) {
      counterArray[number] = counterArray[number] ? counterArray[number] + 1 : 1
    }
  }

  for (let resultIndex = 1; resultIndex <= 100000; resultIndex++) {
    if (counterArray[resultIndex] === undefined) {
      return resultIndex
    }
  }

  return 100001
}
