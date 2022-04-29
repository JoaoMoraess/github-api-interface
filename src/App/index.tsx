import { UserInfo } from 'contracts/domain'
import { makeLoadUserInfo } from 'factories/usecases'
import React, { useState } from 'react'
import { RepoList } from './components/RepoList'
import { SearchForm } from './components/SearchForm'
import { UserCard } from './components/UserCard'
import { Base } from './style'

export const App = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: '',
    name: '',
    picture: '',
    repositories: []
  })

  const loadUserInfo = makeLoadUserInfo()

  const search = async (email: string): Promise<void> => {
    const userInfo = await loadUserInfo(email)
    setUserInfo(userInfo)
  }

  return (
    <Base>
      <UserCard email={userInfo.email} name={userInfo.name} picture={userInfo.picture} />
      <SearchForm onSubmitCallback={search} />
      <RepoList repos={userInfo.repositories} />
    </Base>
  )
}
