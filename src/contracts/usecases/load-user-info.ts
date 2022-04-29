import { UserInfo } from 'contracts/domain'

export type LoadUserInfo = (email: string) => Promise<UserInfo>
