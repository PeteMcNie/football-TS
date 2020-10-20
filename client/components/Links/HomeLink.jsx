import React from 'react'
import { Link } from 'react-router-dom'

function HomeLink () {
  return (
    <div className='homecontainer'>
      <Link to="/" className='homelink'>Home</Link>
    </div>
  )
}

export default HomeLink
