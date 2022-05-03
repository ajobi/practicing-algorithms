var checkIfExist = function(arr) {
  arr.sort((a, b) => a - b)

  let i = 0
  let j = 0

  while (i < arr.length) {
    if (arr[i] < 0) {
      j = i - 1

      while (j >= 0 && arr[j] >= arr[i] * 2) {
        if (arr[j] === arr[i] * 2) {
          return true
        }
        j--
      }

      i++
      continue
    }

    j = i + 1

    while (j < arr.length && arr[j] <= arr[i] * 2) {
      if (arr[j] === arr[i] * 2) {
        return true
      }
      j++
    }

    i++
  }

  return false
};
