import { expect, test } from 'vitest'
import '@testing-library/jest-dom'
import { render } from '@tests/support'

function Example() {
  return (
    <div>
      <header role="heading">hello there</header>
      <button disabled={true}></button>
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
