// SCORE: 100% correctness, performance not assessed for this lesson
function solution(N) {
  const binary = toBinary(N)

  let longestGap = 0
  let currentGap = 0

  for (let i = 1; i < binary.length; i++) {
    if (binary[i] === '0' && binary[i -1] === '1') {
      currentGap++
      continue;
    }

    if (currentGap && binary[i] === '0' && binary[i -1] === '0') {
      currentGap++
      continue;
    }

    if (currentGap && binary[i] === '1') {
      longestGap = currentGap > longestGap ? currentGap : longestGap
      currentGap = 0;
    }
  }

  return longestGap
}

function toBinary(dec){
  let binaryArray = []

  while (dec > 0) {
    dec % 2 === 1 ? binaryArray.push('1') : binaryArray.push('0')
    dec = Math.floor(dec / 2)
  }

  return binaryArray.reverse().join('')
}
