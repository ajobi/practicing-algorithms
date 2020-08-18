// SCORE: 15/15
function getMoneySpent(keyboards, drives, b) {
  let max = -1

  keyboards.sort((a, b) => b - a)
  drives.sort((a, b) => a - b)

  let i = 0;
  let j = 0;

  while (i < keyboards.length && j < drives.length) {
    const potentialSum = keyboards[i] + drives[j]

    if (potentialSum > b) {
      i++
      continue
    }

    max = Math.max(max, potentialSum)
    j++
  }

  return max
}
