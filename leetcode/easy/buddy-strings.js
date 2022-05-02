var buddyStrings = function(s, goal) {
  if (s.length !== goal.length) {
    return false
  }

  let hasSwapHappened = false
  let hasDuplicateLetters = false
  let letters = []
  let needsSwapping = []
  for (let i = 0; i < s.length; i++) {
    if (letters.includes(s[i])) {
      hasDuplicateLetters = true
    }

    letters.push(s[i])

    if (s[i] !== goal[i]) {
      const index = needsSwapping.find(item => item[0] === s[i] && item[1] === goal[i])

      if (index) {
        hasSwapHappened = true
        needsSwapping.splice(index, 1)
      } else {
        if (hasSwapHappened) {
          return false
        }

        needsSwapping.push([goal[i], s[i]])
      }
    }

    if (needsSwapping.length > 1) {
      return false
    }
  }

  return (hasSwapHappened || hasDuplicateLetters) && needsSwapping.length === 0
};
