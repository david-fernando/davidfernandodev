import styled from 'styled-components'

const Main = styled.div`
  width: 66%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 24pt;
  flex-direction: column;
  background: #fff;
  gap: 60pt;
  padding-bottom: 31pt;

  @media (max-width: 852px) {
    width: 80%;
  }

  @media (max-width: 852px) {
    width: 90%;
  }

  @media (max-width: 739px) {
    width: 100%;
  }
`

export default Main;