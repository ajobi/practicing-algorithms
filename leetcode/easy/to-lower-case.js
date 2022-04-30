var toLowerCase = function(s) {
  let result = []

  for (let char of s) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      result.push(String.fromCharCode(char.charCodeAt(0) + 32))
    } else {
      result.push(char)
    }
  }

  return result.join('')
};
