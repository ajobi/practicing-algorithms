// SCORE: 20/20
function utopianTree(n) {
  let cyclesLeft = n
  let spring = true
  let height = 1

  while (cyclesLeft-- > 0) {
    height = spring ? height * 2 : height + 1

    spring = !spring
  }

  return height
}
