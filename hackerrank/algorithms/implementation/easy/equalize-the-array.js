// SCORE: 20/20
function equalizeArray(arr) {
  const counter = []

  for (let i = 0; i < arr.length; i++) {
    counter[arr[i]] = counter[arr[i]] === undefined ? 1 : counter[arr[i]] + 1
  }

  return arr.length - (Math.max(...counter.reduce((acc, value) =>
    value !== undefined ? [...acc, value] : acc, [])))
}
