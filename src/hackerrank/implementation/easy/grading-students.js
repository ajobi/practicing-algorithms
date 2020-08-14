// SCORE: 10/10
function gradingStudents(grades) {
  let result = []

  for (let grade of grades) {
    if (grade < 38) {
      result.push(grade)
      continue;
    }

    const nextFiveMultiple = grade + (5 - (grade % 5))
    result.push((nextFiveMultiple - grade) < 3 ? nextFiveMultiple : grade)
  }

  return result
}
