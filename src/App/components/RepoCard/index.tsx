import { Repo } from 'contracts/domain'
import React from 'react'
import * as S from './styles'

type Props = {
  repo: Repo
}

export const RepoCard: React.FC<Props> = ({ repo }) => {
  return (
    <S.CardWrapper>
      <h2>{repo.name}</h2>
      <span>{repo.description}</span>
    </S.CardWrapper>
  )
}
