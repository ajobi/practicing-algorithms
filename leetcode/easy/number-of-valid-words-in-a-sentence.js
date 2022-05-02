var countValidWords = function(sentence) {
  return sentence.trim().split(/\s/g).filter(word => {
    if (word.match(/[0-9]/)) {
      return false
    }

    if (word.match(/-/g)?.length > 1) {
      return false
    }

    if (word.match(/([!,?.])/g)?.length > 1) {
      return false
    }

    const hyphenIndex = word.indexOf('-')
    if ([0, word.length - 1].includes(hyphenIndex)) {
      return false
    }

    if (hyphenIndex !== -1 && (!word[hyphenIndex - 1].match(/[a-z]/) || !word[hyphenIndex + 1].match(/[a-z]/))) {
      return false
    }

    const punctuationMatch = word.match(/([!,?.])/)
    return !(punctuationMatch?.length > 0 && punctuationMatch.index !== word.length - 1);
  }).length
};
