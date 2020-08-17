// SCORE: 10/10
function getTotalX(a, b) {
  let count = 0

  let minValue = Math.max(...a)
  let maxValue = Math.min(...b)

  let currentValue = minValue
  while (currentValue <= maxValue) {
    let isBetween = true

    for (let num of a) {
      if (currentValue % num !== 0) {
        isBetween = false
        break;
      }
    }

    for (let num of b) {
      if (num % currentValue !== 0) {
        isBetween = false
        break;
      }
    }

    if (isBetween) {
      count++
    }

    currentValue += minValue
  }

  return count
}
