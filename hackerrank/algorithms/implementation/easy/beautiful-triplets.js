// SCORE: 20/20
function beautifulTriplets(d, arr) {
  const els = []
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i]

    if (els[value - d] && els[value - d * 2]){
      count+= els[value - d] * els[value - d * 2]
    }

    els[value] = els[value] === undefined ? 1 : els[value] + 1
  }

  return count
}
