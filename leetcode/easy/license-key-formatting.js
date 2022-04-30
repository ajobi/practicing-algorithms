var licenseKeyFormatting = function(s, k) {
  const withoutDashesReversed = s.split('-').join('').split('').reverse()

  const resultParts = []

  let j = 0
  while (j < withoutDashesReversed.length) {
    resultParts.push(withoutDashesReversed.slice(j, j + k).join(''))
    j += k
  }

  return resultParts.reverse().map(part => part.split('').reverse().join('')).join('-').toUpperCase()
};
