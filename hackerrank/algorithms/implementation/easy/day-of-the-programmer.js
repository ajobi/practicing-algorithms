// SCORE: 15/15
function dayOfProgrammer(year) {
  const SEPTEMBER_NON_LEAP = 13
  const SEPTEMBER_LEAP = 12
  const SEPTEMBER_SWITCH = 26

  if (year <= 1917) {
    if (year % 4 === 0) {
      return `${SEPTEMBER_LEAP}.09.${year}`
    } else {
      return `${SEPTEMBER_NON_LEAP}.09.${year}`
    }
  }

  if (year === 1918) {
    return `${SEPTEMBER_SWITCH}.09.${year}`
  }

  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return `${SEPTEMBER_LEAP}.09.${year}`
  } else {
    return `${SEPTEMBER_NON_LEAP}.09.${year}`
  }
}
