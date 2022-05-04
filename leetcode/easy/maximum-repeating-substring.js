var maxRepeating = function(sequence, word) {
  let result = 0

  for (let i = 0; i < sequence.length; i++) {
    let phrase = new Array(i + 1).fill(word).join('')

    if (sequence.includes(phrase)) {
      result++
    } else {
      break
    }
  }

  return result
};
