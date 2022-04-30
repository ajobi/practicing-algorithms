var reverseVowels = function(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  const chars = s.split('')
  const vowelsInS = []

  for (let i = 0; i < chars.length; i++) {
    if (vowels.includes(chars[i])) {
      vowelsInS.push(chars[i])
      chars[i] = null
    }
  }

  vowelsInS.reverse()

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === null) {
      chars[i] = vowelsInS.shift()
    }
  }

  return chars.join('')
};
