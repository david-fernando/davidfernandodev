import styled, { css } from 'styled-components'

const Text = styled.span`
  ${props => props.nameProfile && css`
    font-size: 34pt;

    @media (max-width: 430px){
      font-size: 24pt;
    }
  `}

  ${props => props.title && css`
    font-size: 24px;
  `}

  ${props => props.about && css`
    font-size: 16px;
  `}
`

export default Text;