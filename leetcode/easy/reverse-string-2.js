var reverseStr = function(s, k) {
  const result = []

  let i = 0
  while (i < s.length) {
    const reversedChunk = s.slice(i, i + k).split('').reverse().join('')
    const normalChunk = s.slice(i + k, i + k * 2)

    result.push(reversedChunk, normalChunk)

    i += k * 2
  }

  return result.join('')
};
