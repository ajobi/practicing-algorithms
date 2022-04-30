var checkRecord = function(s) {
  let absences = 0
  let lateSeries = 0

  for (let record of s) {
    if (absences > 1 || lateSeries > 2) {
      return false
    }

    if (record === 'A') {
      absences++
      lateSeries = 0
      continue
    }

    if (record === 'P') {
      lateSeries = 0
      continue
    }

    if (record === 'L') {
      lateSeries++
    }
  }

  return absences < 2 && lateSeries < 3
};
