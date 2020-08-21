// SCORE: 25/25
function cutTheSticks(arr) {
  arr.sort((a, b) => a - b)

  let results = []
  while (arr[0] !== arr[arr.length - 1]) {
    results.push(arr.length)

    let minStick = arr[0]
    let notDiscardingIndex = null

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1]) {
        notDiscardingIndex = i
        break
      }
    }

    arr.splice(0, notDiscardingIndex)

    for (let i = 0; i < arr.length; i++) {
      arr[i] -= minStick
    }
  }

  results.push(arr.length)
  return results
}
