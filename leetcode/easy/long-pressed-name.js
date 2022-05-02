var isLongPressedName = function(name, typed) {
  let j = 0
  for (let i = 0; i < name.length; i++) {
    if (name[i] !== typed[j]) {
      return false
    }

    while (name[i] === typed[j]) {
      if (name[i] === name[i + 1] && typed[j] === typed[j + 1]) {
        i++
      }
      j++
    }
  }

  return j === typed.length
};
