import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import App from '../src/App'

describe('App', () => {
  afterEach(cleanup)
  it('should app is a function', () => {
    render(<App />)
  })
})
