// SCORE: 25/25
function checkMagazine(magazine, note) {
  const magazineMap = {}

  for (let word of magazine) {
    magazineMap[word] = (magazineMap[word] || 0) + 1
  }

  const noteMap = {}

  for (let word of note) {
    noteMap[word] = (noteMap[word] || 0) + 1
  }

  for (let word in noteMap) {
    if (noteMap[word] > (magazineMap[word] || 0)) {
      console.log('No')
      return
    }
  }

  console.log('Yes')
}
