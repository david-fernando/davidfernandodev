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

  ${props => props.description && css`
    font-size: 16px;
    text-align: initial;
    max-height: 44%;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    overflow: hidden;
    color: #161b3dbf;
  `}
`

export default Text;