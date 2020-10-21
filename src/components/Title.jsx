import React from 'react'

function Title (props) {
  const { location } = props
  const page = location.pathname

  if (page === '/') {
    return null
  } else if (page === '/sportresults') {
    return (
      <div>
        <h1>Sport Results</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>SpaceX</h1>
      </div>
    )
  }
}

export default Title
