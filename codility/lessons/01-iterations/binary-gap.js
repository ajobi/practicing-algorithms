// SCORE: 100% correctness, performance not assessed for this lesson
function solution(N) {
  const binary = N.toString(2)

  let result = 0
  let currentGap = 0

  for (let i = 1; i < binary.length; i++) {
    if (binary[i] === '0' && binary[i - 1] === '1') {
      currentGap ++
      continue
    }

    if (binary[i] === '0' && binary[i - 1] === '0') {
      currentGap ++
      continue
    }

    if (binary[i] === '1' && binary[i - 1] === '0') {
      result = Math.max(result, currentGap)
      currentGap = 0
    }
  }

  return result
}
