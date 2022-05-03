var checkStraightLine = function(coordinates) {
  for (let i = 1; i < coordinates.length - 1; i++) {
    const diffXPair1 = coordinates[i - 1][0] - coordinates[i][0]
    const diffYPair1 = coordinates[i - 1][1] - coordinates[i][1]
    const diffXPair2 = coordinates[i][0] - coordinates[i + 1][0]
    const diffYPair2 = coordinates[i][1] - coordinates[i + 1][1]

    if (diffXPair1 * diffYPair2 !== diffYPair1 * diffXPair2) {
      return false
    }
  }

  return true
};
