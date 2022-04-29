import styled from 'styled-components'

export const Base = styled.main`
  padding: 10px;
  margin: 0 auto;
  max-width: 1400px;
  max-height: 700px;
  width: 100%;
  height: 100vh;
  color: white;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto 1fr;
  gap: 10px;
  grid-template-areas:
    'userCard searchBar searchBar'
    'userCard repoList repoList'
`
