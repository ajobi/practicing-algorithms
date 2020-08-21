// SCORE: 20/20
function appendAndDelete(s, t, k) {
  let removalsNeeded = 0
  let additionsNeeded = 0

  let firstBadIndex = null
  for (let i = 0; i < s.length; i++) {
    if (!(s[i] === t[i] && t[i] !== undefined)) {
      firstBadIndex = i
      break
    }
  }

  firstBadIndex = firstBadIndex !== null ? firstBadIndex : s.length
  removalsNeeded = s.length - firstBadIndex
  additionsNeeded = t.length - firstBadIndex

  if (removalsNeeded + additionsNeeded === k) {
    return 'Yes'
  }

  if (removalsNeeded + additionsNeeded > k) {
    return 'No'
  }

  if ((k - (removalsNeeded + additionsNeeded)) % 2 === 0) {
    return 'Yes'
  }

  if (k - t.length - s.length > 0) {
    return 'Yes'
  }

  return 'No'
}
