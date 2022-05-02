var reorderSpaces = function(text) {
  const numberOfSpaces = text.match(/\s/g)?.length
  const words = text.trim().split(/\s+/g)
  const spacesDivider = words.length - 1
  const spacesPerWord = spacesDivider > 0 ? Math.floor(numberOfSpaces / spacesDivider) : 0
  const trailingSpaces = spacesDivider > 0 ? numberOfSpaces % spacesDivider : numberOfSpaces

  const spaceBetweenWords = new Array(spacesPerWord).fill(' ').join('')
  const trailingSpace = new Array(trailingSpaces || 0).fill(' ').join('')

  return `${words.join(spaceBetweenWords)}${trailingSpace}`
};
