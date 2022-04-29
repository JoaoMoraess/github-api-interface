import { GitHubApi } from 'contracts/gateways/github-api'
import { LoadUserInfo } from 'contracts/usecases'

export type SetupLoadUserInfo = (gitHubApi: GitHubApi) => LoadUserInfo

export const setupLoadUserinfo: SetupLoadUserInfo = (gitHubApi) => async (email) => {
  const user = await gitHubApi.loadUser(email)
  const info = {
    picture: user.avatar_url,
    name: user.name,
    email: user.email,
    repositories: user.repositories
      .map((info: any) => ({ name: info.name, description: info.description }))
  }
  return info
}
