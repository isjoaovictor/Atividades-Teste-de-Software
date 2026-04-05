import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import RootApp from '../RootApp'

describe('Integracao RootApp', () => {
  test('caminho feliz: renderiza modulos e incrementa contador no App', () => {
    render(<RootApp />)

    expect(screen.getByRole('heading', { name: /vite \+ react/i })).toBeInTheDocument()

    const botaoContador = screen.getByRole('button', { name: /count is 0/i })
    fireEvent.click(botaoContador)

    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
  })

  test('contrato entre modulos: todas as views de imagem sao renderizadas', () => {
    render(<RootApp />)

    expect(screen.getAllByRole('img')).toHaveLength(4)
  })
})
