var calPoints = function(ops) {
  let scores = []

  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === '+') {
      scores.push(scores[scores.length - 1] + scores[scores.length - 2])
      continue
    }

    if (ops[i] === 'D') {
      scores.push(2 * scores[scores.length - 1])
      continue
    }

    if (ops[i] === 'C') {
      scores.pop()
      continue
    }

    scores.push(parseInt(ops[i]))
  }

  return scores.reduce((result, score) => result + score, 0)
};
