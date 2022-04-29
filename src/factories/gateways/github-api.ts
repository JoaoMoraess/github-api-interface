import { GitHubApi } from 'contracts/gateways'
import { githubApi } from 'gateways'

export const makeGithubApi = (): GitHubApi => {
  return githubApi()
}
