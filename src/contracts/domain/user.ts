import { Repo } from './repo'

export type UserInfo = {
  picture: string,
  name: string,
  email: string,
  repositories: Repo[]
}
