import { LoadUserInfo } from 'contracts/usecases'
import { makeGithubApi } from 'factories/gateways'
import { setupLoadUserinfo } from 'usecases'

export const makeLoadUserInfo = (): LoadUserInfo => {
  return setupLoadUserinfo(makeGithubApi())
}
