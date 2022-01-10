import { screen, render } from '@testing-library/react'
import { MemoryRouter, Switch } from 'react-router-dom'
import Routes from '../../Routes.jsx'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import {logRoles} from '@testing-library/dom'

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/1', (req, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        image: '1.jpeg'
      })
    )
  })
)

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

it('should fetch and render character details', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/characters/1']}>
      <Routes />
    </MemoryRouter>
  )

  screen.getByText(/Loading character/)

  await screen.findByText('Rick Sanchez')
})