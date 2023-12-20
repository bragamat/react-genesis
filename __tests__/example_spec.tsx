import { expect, test } from 'vitest'
import '@testing-library/jest-dom'
import { render } from '@tests/support'
import { Example } from './example'

test('loads and displays greeting', async () => {
  // ARRANGE
  const { getByRole, findByRole } = render(<Example />)

  // ACT
  await findByRole('heading')

  // ASSERT
  expect(getByRole('heading')).toHaveTextContent('hello there')
  expect(getByRole('button')).toBeDisabled()
})
