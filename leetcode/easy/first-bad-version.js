var solution = function(isBadVersion) {
  return function(n) {
    let smallestBadVersion = n

    for (let i = n; i >= 0; i--) {
      if (isBadVersion(i)) {
        smallestBadVersion = i
      } else {
        return smallestBadVersion
      }
    }

    return smallestBadVersion
  };
};
