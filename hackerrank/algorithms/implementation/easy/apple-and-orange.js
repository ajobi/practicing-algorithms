// SCORE: 10/10
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;

  for (let apple of apples) {
    const pos = a + apple

    if (pos >= s && pos <= t) {
      appleCount++
    }
  }

  for (let orange of oranges) {
    const pos = b + orange

    if (pos >= s && pos <= t) {
      orangeCount++
    }
  }

  console.log(appleCount)
  console.log(orangeCount)
}
