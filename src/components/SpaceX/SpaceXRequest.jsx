import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

import { getSpaceData } from '../../actions/spaceActions'

function SpaceXRequest () {
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()

  function onSubmit (data) {
    console.log(data)
    dispatch(getSpaceData(data))
  }
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="SpaceX" name="SpaceX" ref={register({ required: true, maxLength: 30 })} />
      <input type="submit" />
    </form>
  )
}

export default SpaceXRequest
