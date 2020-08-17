// SCORE: 10/10
function birthday(s, d, m) {
  let counter = 0

  for (let i = 0; i < s.length; i++) {
    const end = i + m - 1

    if (end >= s.length) {
      break
    }

    let sum = 0;
    for (let j = i; j <= end; j++) {
      sum += s[j]
    }

    if (sum === d) {
      counter++
    }
  }

  return counter
}
