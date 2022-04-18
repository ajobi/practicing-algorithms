// SCORE: 30/30
function countSwaps(a) {
  const n = a.length
  let swapCount = 0

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (a[j] > a[j + 1]) {
        const temp = a[j]
        a[j] = a[j + 1]
        a[j + 1] = temp
        swapCount++
      }
    }
  }

  console.log(`Array is sorted in ${swapCount} swaps.`)
  console.log(`First Element: ${a[0]}`)
  console.log(`Last Element: ${a[a.length - 1]}`)
}
