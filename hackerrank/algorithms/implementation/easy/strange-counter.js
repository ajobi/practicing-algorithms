// SCORE: 30/30
function strangeCounter(t) {
  let counter = 3
  let startTime = 1

  while (startTime + counter <= t) {
    startTime += counter
    counter = counter * 2
  }

  return counter - (t - startTime)
}
