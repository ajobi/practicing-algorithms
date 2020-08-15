// SCORE: 10/10
function plusMinus(arr) {
  let posCount = 0;
  let negCount = 0;
  let zeroCount = 0;

  for (let num of arr) {
    if (num > 0) {
      posCount++
    } else if (num < 0) {
      negCount++
    } else {
      zeroCount++
    }
  }

  console.log(posCount / arr.length)
  console.log(negCount / arr.length)
  console.log(zeroCount / arr.length)
}
