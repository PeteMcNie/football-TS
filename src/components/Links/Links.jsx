import React from 'react'
import { Link } from 'react-router-dom'

function Links () {
  return (
    <div className='linksconatiner'>
      <div className='links'>
        <Link to={'/sportresults'} className='homepage'>Sport Results</Link>
      </div>
      <div className='links'>
        <Link to={'/spaceX'} className='homepage'>SpaceX</Link>
      </div>
    </div>
  )
}

export default Links
