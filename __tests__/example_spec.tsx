import React from 'react'
import { expect, test } from 'vitest'
import { render } from './support/wrapper'
import '@testing-library/jest-dom'

function Example() {
  return (
    <div>
      <header role="heading">
        hello there
      </header>
      <button disabled={true}>
      </button>
    </div>
  )
}

test('loads and displays greeting', async () => {
  // ARRANGE
  const { getByRole, findByRole } = render(<Example />)

  // ACT
  await findByRole('heading')

  // ASSERT
  expect(getByRole('heading')).toHaveTextContent('hello there')
  expect(getByRole('button')).toBeDisabled()
})
