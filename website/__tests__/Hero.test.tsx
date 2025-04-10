import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Hero from '../src/components/Hero'

describe('Hero', () => {
  beforeEach(() => {
    render(<Hero />)
  })

  it('renders a main heading (h1)', () => {
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it('renders a subheading (h2)', () => {
    const subheading = screen.getByRole('heading', { level: 2 })
    expect(subheading).toBeInTheDocument()
  })

  it('renders a button', () => {
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('renders a visual element', () => {
    const image = screen.queryByRole('img')
    const fallbackVisual = screen.queryByTestId('hero-visual')
    expect(image || fallbackVisual).toBeTruthy()
  })

  it('confirms that the Hero section includes all key elements', () => {
    const heading = screen.getByRole('heading', { level: 1 })
    const subheading = screen.getByRole('heading', { level: 2 })
    const button = screen.getByRole('button')
    const image = screen.queryByRole('img')
    const fallbackVisual = screen.queryByTestId('hero-visual')

    expect(heading).toBeInTheDocument()
    expect(subheading).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(image || fallbackVisual).toBeTruthy()
  })
})
