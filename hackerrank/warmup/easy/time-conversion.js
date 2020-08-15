// SCORE: 15/15
function timeConversion(s) {
  if (s.includes('PM')) {
    const parts = s.slice(0, 8).split(':')

    if (parts[0] < 12) {
      parts[0] = ('0' + (parseInt(parts[0]) + 12)).slice(-2)
    }

    return parts.join(':')
  }

  if (s.includes('AM')) {
    const parts = s.slice(0, 8).split(':')

    if (parts[0] >= 12) {
      parts[0] = ('0' + (parseInt(parts[0]) - 12)).slice(-2)
    }

    return parts.join(':')
  }
}
