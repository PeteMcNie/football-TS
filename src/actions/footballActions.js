import { getTeam } from '../api/footballApi'

export const GET_TEAM = 'GET_TEAM'
export const GET_TEAM_SUCCESS = 'GET_TEAM_SUCCESS'

export function gettingTeam () {
  return {
    type: GET_TEAM
  }
}

export function gettingTeamSuccess (teamMatchData) {
  return {
    type: GET_TEAM_SUCCESS,
    teamMatchData
  }
}

export function getTeamAction (team) {
//  console.log(team)
  return (dispatch) => {
    dispatch(gettingTeam())
    return getTeam(team)
      .then(teamMatchData => {
        // console.log('getTeamAction', teamMatchData)
        dispatch(gettingTeamSuccess(teamMatchData))
      })
  }
}
