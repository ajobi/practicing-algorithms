// SCORE: 30/30
function kaprekarNumbers(p, q) {
  const kaprekars = []

  for (let n = p; n <= q; n++) {
    const d = n.toString().length
    const square = Math.pow(n, 2).toString()
    const l = square.slice(0, square.length - d)
    const r = square.slice(square.length - d)

    if ((parseInt(l) || 0) + (parseInt(r) || 0) === n) {
      kaprekars.push(n)
    }
  }

  if (kaprekars.length === 0) {
    console.log('INVALID RANGE')
  } else {
    console.log(...kaprekars)
  }
}
