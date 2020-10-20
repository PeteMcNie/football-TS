import React from 'react'

import { renderWithRedux } from '../testing/utils'

import Title from './Title'

xtest('Title component matches snapshot', () => {
  const { container } = renderWithRedux(<Title />)
  expect(container).toMatchSnapshot()
})
