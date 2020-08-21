// SCORE: 25/25
function findDigits(n) {
  const numInteger = n.toString()

  let count = 0
  for (let digit of numInteger) {
    if (n % parseInt(digit) === 0) {
      count++
    }
  }

  return count
}
