var findWords = function(words) {
  const row1 = 'qwertyuiop'.split('')
  const row2 = 'asdfghjkl'.split('')
  const row3 = 'zxcvbnm'.split('')

  const rows = [row1, row2, row3]

  return words.filter(word => {
    return rows.some(row => word.split('').every(character => row.includes(character.toLowerCase())))
  })
};
