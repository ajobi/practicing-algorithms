// SCORE: 20/20
function pickingNumbers(a) {
  const counter = []

  for (let i = 0; i < a.length; i++) {
    counter[a[i]] = counter[a[i]] === undefined ? 1 : counter[a[i]] + 1
  }

  let max = 0
  for (let i = 1; i < counter.length; i++) {
    let prev = counter[i - 1] || 0
    let curr = counter[i] || 0

    max = Math.max(max, prev + curr)
  }

  return max
}
