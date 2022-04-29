import styled from 'styled-components'

export const CardWrapper = styled.div`
  grid-area: userCard;
  background-color: #161b22;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  border: 1px solid #2a3037;
  align-items: center;
  flex-direction: column;
`
export const PictureWrapper = styled.div<{ bgUrl: string }>`
  width: 300px;
  height: 300px;
  border: 1px solid #2a3037;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 150px;
  background-image: url(${({ bgUrl }) => bgUrl});
`
export const Information = styled.p`
  color: #56a2f8;
  font-size: 2rem;

`
