// SCORE: 25/25
function workbook(n, k, arr) {
  let currentPage = 1
  let specials = 0

  for (let issues of arr) {
    const endPage = currentPage + Math.ceil(issues / k) - 1

    let firstIssue = 1
    let lastIssue = firstIssue + k - 1 < issues ? firstIssue + k - 1 : issues

    for (let i = currentPage; i <= endPage; i++) {
      if (i >= firstIssue && i <= lastIssue) {
        specials++
      }

      firstIssue = lastIssue + 1
      lastIssue = firstIssue + k - 1 < issues ? firstIssue + k - 1 : issues
    }

    currentPage = endPage + 1
  }

  return specials
}
