// SCORE: 20/20
function jumpingOnClouds(c) {
  let count = 0;

  let pos = 0;
  while (pos < c.length - 1) {
    if (c[pos + 2] === 0) {
      pos += 2
    } else {
      pos += 1
    }

    count++
  }

  return count
}
