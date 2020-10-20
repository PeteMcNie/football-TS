import React from 'react'
import { connect } from 'react-redux'

function TeamMatchData (props) {
  const { teamMatchData } = props
  console.log('DATA IN COMP ', teamMatchData)
  if (!teamMatchData) return null

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Matchday</th>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Winner</th>
          </tr>
        </thead>
        {teamMatchData.map(el =>
          <tbody key='table'>
            <tr key={el.id}>
              <td>{el.matchday}</td>
              <td>{el.homeTeam.name}</td>
              <td>{el.awayTeam.name}</td>
              <td>{el.score.winner}</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    teamMatchData: state.teamMatchData
  }
}
export default connect(mapStateToProps)(TeamMatchData)
