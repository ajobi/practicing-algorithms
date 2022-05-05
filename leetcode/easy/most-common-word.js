var mostCommonWord = function(paragraph, banned) {
  banned = banned.map(word => word.toLowerCase())
  const words = paragraph.split(/[\s|!?',;.]+/g).map(word => word.toLowerCase()).filter(word => !banned.includes(word) && !!word)

  const appearances = {}

  for (let word of words) {
    appearances[word] = (appearances[word] || 0) + 1
  }

  let maxAppearance = Number.MIN_SAFE_INTEGER
  let maxWord = null

  for (let word in appearances) {
    if (appearances[word] > maxAppearance) {
      maxAppearance = appearances[word]
      maxWord = word
    }
  }

  return maxWord
};
