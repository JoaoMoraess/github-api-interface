import { Repo } from 'contracts/domain/repo'
import React from 'react'
import { RepoCard } from '../RepoCard'
import * as S from './styles'

type Props = {
  repos: Repo[]
}

export const RepoList: React.FC<Props> = ({ repos }) => {
  return (
    <S.RepoListWrapper>
      {repos.map((repo, index) => (
        <React.Fragment key={`repo-${index}`}>
          <RepoCard repo={repo} />
        </React.Fragment>
      ))}
    </S.RepoListWrapper>
  )
}
