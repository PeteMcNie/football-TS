import React, { useState } from 'react'
import { connect } from 'react-redux'

import { getTeamAction } from '../../actions/footballActions'

function TeamRequest (props) {
  const [state, setState] = useState('')

  function handleChange (evt) {
    // console.log(evt.target.value)
    const { value } = evt.target
    setState(value)
  }

  function submitHandler (state) {
    // console.log(state)
    if (state) {
      props.dispatch(getTeamAction(state))
    }
  }

  return (
    <div>
      <select onChange={handleChange}>
        <option value={null}>Select Team</option>
        <option value={66}>Man Utd</option>
        <option value={397}>Brighton</option>
      </select>
      <option></option>
      <button onClick={() => submitHandler(state)}>Submit</button>
    </div>
  )
}

export default connect()(TeamRequest)
