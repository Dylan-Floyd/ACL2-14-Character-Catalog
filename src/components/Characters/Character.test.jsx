import { render, screen } from '@testing-library/react'
import Character from './Character.jsx'

it('should match the snapshot', () => {
  const charData = {
    image: 'asdf.png',
    name: 'bob',
    species: 'man',
    status: 'alive'
  }
  const { container } = render(<Character character={charData} />)
  expect(container).toMatchSnapshot()
})