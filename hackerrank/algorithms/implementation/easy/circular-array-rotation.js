// SCORE: 20/20
function circularArrayRotation(a, k, queries) {
  const rotateBy = k >= a.length ? k % a.length : k

  let rotatedArray = []

  for (let i = 0; i < a.length; i++) {
    if (i + k < a.length) {
      rotatedArray[i + k] = a[i]
    } else {
      rotatedArray[(i + k) % a.length] = a[i]
    }
  }

  let answers = []

  for (let i = 0; i < queries.length; i++) {
    answers[i] = rotatedArray[queries[i]]
  }

  return answers
}
