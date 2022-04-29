import styled from 'styled-components'

export const RepoListWrapper = styled.div`
  grid-area: repoList;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: #161b22;
  border-radius: 5px;
  border: 1px solid #2a3037;

  & > div:not(&:first-child) {
    border-bottom: 1px solid #2a3037;
  }
`
