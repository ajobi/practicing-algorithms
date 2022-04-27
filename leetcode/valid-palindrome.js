var isPalindrome = function(s) {
  const processedS = (s.match(/[A-Za-z0-9]+/g) || []).join('').toLowerCase()

  const firstHalf = processedS.slice(0, Math.floor(processedS.length / 2))
  let secondHalf = processedS.slice(Math.floor(processedS.length / 2))

  secondHalf = secondHalf.split('').reverse()

  if (secondHalf.length > firstHalf.length) {
    secondHalf.pop()
  }


  for (let i = 0; i < firstHalf.length; i++) {
    if (firstHalf[i] !== secondHalf[i]) {
      return false
    }
  }

  return true
};
