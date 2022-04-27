var titleToNumber = function(columnTitle) {
  let result = 0

  for (let i = 0; i < columnTitle.length; i++) {
    const charValue = columnTitle.charCodeAt(i) - 64
    const order = columnTitle.length - i - 1

    result += charValue * Math.pow(26, order)
  }

  return result
};
