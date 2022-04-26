var isValid = function(s) {
  const openingBrackets = []

  const bracketsMap = {
    ')': '(',
    ']': '[',
    '}': '{',
  }

  for (let i = 0; i < s.length; i++) {
    if (Object.values(bracketsMap).includes(s[i])) {
      openingBrackets.push(s[i])
      continue;
    }

    const stackTop = openingBrackets[openingBrackets.length - 1]

    if (stackTop && stackTop === bracketsMap[s[i]]) {
      openingBrackets.pop()
      continue;
    }

    return false
  }

  return openingBrackets.length === 0

};
