var detectCapitalUse = function(word) {
  return word.split('').every(char => char.toUpperCase() === char) ||
    word.split('').every(char => char.toLowerCase() === char) ||
    (word[0].toUpperCase() === word[0] &&
      word.split('').slice(1).every(char => char.toLowerCase() === char))
};
