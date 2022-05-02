var hasGroupsSizeX = function(deck) {
  if (deck.length < 2) {
    return false
  }

  const appearances = {}

  for (let number of deck) {
    appearances[number] = (appearances[number] || 0) + 1
  }

  let appearanceCounts = []
  for (let number in appearances) {
    appearanceCounts.push(appearances[number])
  }

  const gcd = (a, b) => {
    if (b === 0)
      return a;
    else
      return gcd(b, (a % b));
  }

  let denominator = appearanceCounts[0]
  for (let i = 1; i < appearanceCounts.length; i++) {
    denominator = gcd(denominator, appearanceCounts[i])
  }

  return denominator >= 2
};
