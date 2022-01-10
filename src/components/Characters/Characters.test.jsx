import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min'
import Characters from './Characters.jsx'

it('should match the snapshot', () => {
  const charData = [
    {
      image: 'asdf.png',
      name: 'bob',
      species: 'man',
      status: 'alive'
    },
    {
      image: 'asdf2.png',
      name: 'bob2',
      species: 'man',
      status: 'alive'

    }
  ]
  const { container } = render(
    <MemoryRouter initialEntries={['/']}>
      <Characters characters={charData} />
    </MemoryRouter>
  )
  expect(container).toMatchSnapshot()
})