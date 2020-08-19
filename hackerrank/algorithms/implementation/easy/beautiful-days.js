// SCORE: 15/15
function beautifulDays(i, j, k) {
  let result = 0

  for (let day = i; day <= j; day++) {
    const reversed = day.toString().split('').reverse().join('')

    if ((day - parseInt(reversed)) % k === 0) {
      result++
    }
  }

  return result
}
