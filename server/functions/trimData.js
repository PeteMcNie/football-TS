// const getTeamInfo = require('../apiCalls/footballApi')

function trimData (teamInfo) {
  const trimmedInfo = teamInfo.map(function (el) {
    return {
      awayTeam: el.awayTeam,
      hometeam: el.homeTeam,
      score: el.score,
      matchday: el.matchday,
      data: el.date,
      competition: el.competition,
      status: el.status
    }
  })
  return trimmedInfo
}

module.exports = trimData
