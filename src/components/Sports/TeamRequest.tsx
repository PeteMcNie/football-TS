import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { getTeamAction } from '../../actions/footballActions'

function TeamRequest () {
  const [state, setState] = useState('')
  const dispatch = useDispatch()

  function handleChange (evt) {
    // console.log(evt.target.value)
    const { value } = evt.target
    setState(value)
  }

  function submitHandler (state) {
    // console.log(state)
    if (state) {
      dispatch(getTeamAction(state))
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

export default TeamRequest
