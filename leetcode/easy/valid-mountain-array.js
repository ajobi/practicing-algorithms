var validMountainArray = function(arr) {
  let direction = null

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      return false
    }

    if (arr[i] < arr[i - 1] && direction === null) {
      return false
    }

    if (arr[i] > arr[i - 1] && direction === null) {
      direction = 'UP'
    }

    if (arr[i] < arr[i - 1] && direction === 'UP') {
      direction = 'DOWN'
    }

    if (arr[i] > arr[i - 1] && direction === 'DOWN') {
      return false
    }
  }

  return direction === 'DOWN'
};
