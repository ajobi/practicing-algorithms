// SCORE: 20/20
function angryProfessor(k, a) {
  let onTime = 0;

  for (let time of a) {
    console.log(time)

    if (time <= 0) {
      onTime++
    }
  }

  return onTime >= k ? 'NO' : 'YES'
}
