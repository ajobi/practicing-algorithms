// SCORE: 10/10
function kangaroo(x1, v1, x2, v2) {
  if (x1 < x2 && v1 <= v2) {
    return 'NO'
  }

  if (x1 > x2 && v1 >= v2) {
    return 'NO'
  }

  let p1 = x1
  let p2 = x2
  const p1Behind = p1 <= p2
  while (true) {
    if (p1 === p2) {
      return 'YES'
    }

    console.log(p1, p2)

    p1 += v1
    p2 += v2

    if (p1Behind !== p1 <= p2) {
      return 'NO'
    }
  }
}
