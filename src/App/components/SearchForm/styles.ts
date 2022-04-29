import styled from 'styled-components'

export const Wrapper = styled.div`
  grid-area: searchBar;
  background-color: #161b22;
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #2a3037;

  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 1.5rem;
      color: #56a2f8;
    }
    input {
      display: flex;
      background-color: #0d1117;
      padding: 5px;
      border-radius: 5px;
      border: 1px solid #2a3037;
    }
  }
`

export const Button = styled.button`
  background-color: #161b22;
  color: #fff;
  border: 1px solid #fff;
  padding: 8px 10px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  font-weight: bold;

  &:hover {
    background-color: #fff;
    color: #161b22;
  }
`
export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`
