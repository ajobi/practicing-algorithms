// https://app.codility.com/cert/view/certNAGFFB-CXTYM5TZPKNFN5JE/

function solution(H) {
  const leftMaximums = []
  const rightMaximums = []

  let currentMax = 0;
  for (let i = 0; i < H.length; i++) {
    currentMax = H[i] > currentMax ? H[i] : currentMax
    leftMaximums[i] = currentMax
  }

  currentMax = 0;
  for (let i = H.length - 1; i >= 0; i--) {
    currentMax = H[i] > currentMax ? H[i] : currentMax
    rightMaximums[i] = currentMax
  }

  let result = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < H.length; i++) {
    const bannerOneSize = leftMaximums[i] * (i + 1);
    const bannerTwoSize = rightMaximums[i + 1] ? rightMaximums[i + 1] * (H.length - i - 1) : 0;

    result = Math.min(result, bannerOneSize + bannerTwoSize)
  }

  return result
}
