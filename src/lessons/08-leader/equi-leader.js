// SCORE: 100% correctness, 100% performance
function solution(A) {
  let counter = []
  let currentMax = 0
  let leadersLeft = []

  for (let i = 0; i < A.length; i++) {
    counter[A[i]] = (counter[A[i]] || 0) + 1

    if (counter[A[i]] > (counter[currentMax] || 0)) {
      currentMax = A[i]
    }

    if (counter[currentMax] > ((i + 1) / 2)) {
      leadersLeft[i] = currentMax
    } else {
      leadersLeft[i] = 'N/A'
    }
  }

  counter = []
  currentMax = A.length - 1
  let leadersRight = []

  for (let i = A.length - 1; i >= 0; i--) {
    counter[A[i]] = (counter[A[i]] || 0) + 1

    if (counter[A[i]] > (counter[currentMax] || 0)) {
      currentMax = A[i]
    }

    if (counter[currentMax] > ((A.length - i) / 2)) {
      leadersRight[i] = currentMax
    } else {
      leadersRight[i] = 'N/A'
    }
  }

  let result = 0;

  for (let i = 0; i < A.length - 1; i++) {
    if (Number.isInteger(leadersLeft[i]) && leadersLeft[i] === leadersRight[i + 1]) {
      result++
    }
  }

  return result
}
