// SCORE: 100% correctness, 100% performance
function solution(S, P, Q) {
  const factors = { A: 1, C: 2, G: 3, T: 4, }

  const sumA = []
  const sumC = []
  const sumG = []

  for (let i = 0; i < S.length; i++) {
    sumA[i] = S[i] === 'A' ? (sumA[i - 1] || 0) + 1 : (sumA[i - 1] || 0)
    sumC[i] = S[i] === 'C' ? (sumC[i - 1] || 0) + 1 : (sumC[i - 1] || 0)
    sumG[i] = S[i] === 'G' ? (sumG[i - 1] || 0) + 1 : (sumG[i - 1] || 0)
  }

  const result = []

  for (let i = 0; i < P.length; i++) {
    const start = P[i] - 1
    const end = Q[i]

    if (sumA[end] > (sumA[start] || 0)) {
      result[i] = factors.A
      continue
    }

    if (sumC[end] > (sumC[start] || 0)) {
      result[i] = factors.C
      continue
    }

    if (sumG[end] > (sumG[start] || 0)) {
      result[i] = factors.G
      continue
    }

    result[i] = factors.T
  }

  return result
}
