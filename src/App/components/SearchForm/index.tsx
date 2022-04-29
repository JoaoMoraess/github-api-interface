import React, { useRef } from 'react'
import * as S from './styles'

type Props = {
  onSubmitCallback: (query: string) => Promise<void>
}

export const SearchForm: React.FC<Props> = ({ onSubmitCallback }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    const value = inputRef.current?.value as string

    await onSubmitCallback(value)
  }
  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
      <h1>Buscar por usuarios</h1>
      <S.InputWrapper>
        <input ref={inputRef} type="text" id="search-input" placeholder="Digite o E-mail" />
        <S.Button type="submit">Buscar</S.Button>
      </S.InputWrapper>
      </form>
    </S.Wrapper>
  )
}
