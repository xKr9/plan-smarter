import React from 'react'
import Dropdown from './dropdown'

describe('<Dropdown />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Dropdown />)
  })
})