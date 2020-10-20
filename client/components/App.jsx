import React from 'react'
import { Route } from 'react-router-dom'

import Title from './Title'
import Links from './Links/Links'
import Sports from './Sports'
import SpaceX from './SpaceX'

const App = () => {
  return (
    <>
      <Route exact path='/' component={Links} />
      <Route path='/' component={Title} />
      <Route path='/sportresults' component={Sports} />
      <Route path='/spaceX' component={SpaceX} />
    </>
  )
}

export default App
