// SCORE: 20/20
function squares(a, b) {
  let counter = 0;

  let root = Math.floor(Math.sqrt(a))
  let square =  Math.pow(root, 2)
  while (square <= b) {
    if (square >= a) {
      counter++
    }

    square = Math.pow(++root, 2)
  }

  return counter
}
