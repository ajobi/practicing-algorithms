var countPrefixes = function(words, s) {
  return words.filter(word => s.startsWith(word)).length
};
