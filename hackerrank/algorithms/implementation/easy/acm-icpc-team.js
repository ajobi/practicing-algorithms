// SCORE: 25/25
function acmTeam(topic) {
  let maximumPerTeam = 0
  let maximumTeams = 0

  for (let i = 0; i < topic.length - 1; i++) {
    for (let j = i + 1; j < topic.length; j++) {
      let teamSkills = []

      for (let k = 0; k < topic[i].length; k++) {
        teamSkills[k] = parseInt(topic[i][k]) || parseInt(topic[j][k])
      }

      const skillCount = teamSkills
        .reduce((acc, value) => value === 1 ? acc + 1 : acc, 0)

      if (skillCount === maximumPerTeam) {
        maximumTeams++
      }

      if (skillCount > maximumPerTeam) {
        maximumPerTeam = skillCount
        maximumTeams = 1
      }
    }
  }

  return [maximumPerTeam, maximumTeams]
}
