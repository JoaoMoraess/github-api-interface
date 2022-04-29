import React from 'react'
import { UserInfo } from 'contracts/domain'
import * as S from './styles'

type Props = Omit<UserInfo, 'repositories'>
export const UserCard: React.FC<Props> = ({ email, name, picture }) => {
  return (
    <S.CardWrapper>
      <S.PictureWrapper bgUrl={picture} />
      <h2>{name}</h2>
      <span>{email}</span>
      <S.Information>(Mocado)</S.Information>
    </S.CardWrapper>
  )
}
