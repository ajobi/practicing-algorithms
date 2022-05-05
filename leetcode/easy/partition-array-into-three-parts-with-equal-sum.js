var canThreePartsEqualSum = function(arr) {
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  let part = 0
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    part += arr[i]

    if (part === sum / 3) {
      count++
      part = 0
    }
  }

  return count >= 3
};
