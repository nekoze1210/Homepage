import { render, screen } from '@testing-library/react'
import React from 'react'

import Home from '@/app/page'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    expect(screen.getAllByRole('list')).toBeTruthy()
  })
})
