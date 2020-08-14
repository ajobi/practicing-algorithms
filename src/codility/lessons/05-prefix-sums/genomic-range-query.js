// SCORE: 100% correctness, 100% performance
function solution(S, P, Q) {
  const sumA = [0]
  const sumC = [0]
  const sumG = [0]

  for (let i = 0; i < S.length; i++) {
    sumA[i + 1] = S[i] === 'A' ? sumA[i] + 1 : sumA[i]
    sumC[i + 1] = S[i] === 'C' ? sumC[i] + 1 : sumC[i]
    sumG[i + 1] = S[i] === 'G' ? sumG[i] + 1 : sumG[i]
  }

  const result = []
  const factorMap = {
    A: 1,
    C: 2,
    G: 3,
    T: 4
  }

  for (let i = 0; i < P.length; i++) {
    const start = P[i]
    const end = Q[i] + 1

    if (start === end) {
      result[i] = factorMap[S[start]]
    } else if (sumA[end] > sumA[start]) {
      result[i] = factorMap.A
    } else if (sumC[end] - sumC[start]) {
      result[i] = factorMap.C
    } else if (sumG[end] - sumG[start]) {
      result[i] = factorMap.G
    } else {
      result[i] = factorMap.T
    }
  }

  return result;
}
