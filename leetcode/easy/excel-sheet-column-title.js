var convertToTitle = function(columnNumber) {
  let result = []

  while (columnNumber > 0) {
    columnNumber--

    result.push(String.fromCharCode('A'.charCodeAt(0) + columnNumber % 26))

    columnNumber = Math.floor(columnNumber / 26)
  }

  return result.reverse().join('')
};
