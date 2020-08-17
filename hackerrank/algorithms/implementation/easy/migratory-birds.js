// SCORE: 10/10
function migratoryBirds(arr) {
  let occurences = []

  for (let i = 0; i < arr.length; i++) {
    occurences[arr[i]] = occurences[arr[i]] === undefined ? 1 : occurences[arr[i]] + 1
  }

  let max = 0;
  let maxId = null;
  for (let i = 0; i < occurences.length; i++) {
    if ((occurences[i] || 0) > max) {
      max = occurences[i]
      maxId = i
    }
  }

  return maxId
}
