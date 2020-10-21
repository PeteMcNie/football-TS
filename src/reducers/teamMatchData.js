import { GET_TEAM_SUCCESS } from '../actions/footballActions'

function teamMatchData (state = [], action) {
  switch (action.type) {
    case GET_TEAM_SUCCESS:
      return action.teamMatchData
    default:
      return state
  }
}

export default teamMatchData
