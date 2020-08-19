// SCORE: 20/20
function designerPdfViewer(h, word) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const map = {}

  for (let i = 0; i < alphabet.length; i++) {
    map[alphabet[i]] = h[i]
  }

  let max = 0;

  for (let char of word) {
    max = Math.max(max, map[char])
  }

  return max * word.length
}
