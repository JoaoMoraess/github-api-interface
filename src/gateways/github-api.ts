import { GitHubApi } from 'contracts/gateways'

// Is mocked
export const githubApi: () => GitHubApi = () => {
  const loadUser = () => {
    return {
      avatar_url: 'https://avatars3.githubusercontent.com/u/1337?v=4',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      repositories: [
        {
          name: 'repo1',
          description: 'description of repo1'
        },
        {
          name: 'repo2',
          description: 'description of repo2'
        }]
    }
  }
  return { loadUser }
}
