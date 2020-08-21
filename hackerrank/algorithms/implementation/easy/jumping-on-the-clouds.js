// SCORE: 15/15
function jumpingOnClouds(c, k) {
  let energy = 100

  let pos = 0;
  do {
    pos = pos + k < c.length ? pos + k : pos + k - c.length
    energy = c[pos] === 1 ? energy - 3 : energy - 1

    console.log(pos)
  } while (pos > 0)

  return energy
}
