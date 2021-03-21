import React from 'react'
import { render, fireEvent } from '../testUtils'
import Home from '../../src/pages/home'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home hasReadPermission={true} />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('clicking button triggers alert', () => {
    const { getByText } = render(<Home hasReadPermission={true} />, {})
    window.alert = jest.fn()
    fireEvent.click(getByText('Test Button'))
    expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
  })
})
