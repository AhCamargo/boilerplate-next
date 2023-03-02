import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avancado/i })
    ).toBeInTheDocument()
  })

  it('should render snapshot', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avancado/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
