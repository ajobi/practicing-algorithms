// SCORE: 20/20
function repeatedString(s, n) {
  const fullRepetitions = Math.floor(n / s.length)
  const remainingChars = n % s.length

  const stringCounter = new Array(s.length).fill(0)

  for (let i = 0; i < s.length; i++) {
    let prev = stringCounter[i - 1]

    if (s[i] === 'a') {
      stringCounter[i] = prev !== undefined ? prev + 1 : 1
    } else {
      stringCounter[i] = prev !== undefined ? prev : 0
    }
  }

  return fullRepetitions * stringCounter[stringCounter.length - 1] + (stringCounter[remainingChars - 1] || 0)
}
