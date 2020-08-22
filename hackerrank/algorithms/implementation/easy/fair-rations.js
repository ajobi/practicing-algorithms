// SCORE: 25/25
function fairRations(B) {
  let number = 0

  for (let i = 0; i < B.length - 1; i++) {
    if (B[i] % 2 === 1) {
      B[i]++
      B[i + 1]++
      number += 2
    }
  }

  return B[B.length - 1] % 2 === 0 ? number : 'NO'
}
