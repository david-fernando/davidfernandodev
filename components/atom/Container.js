import styled, { css } from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;

  ${props => props.profile && css`
    width: 75%;
    max-width: 755.35px;
    gap: 10px;
    align-items: baseline;
    text-align: justify;
    height: 0px auto;

    @media (max-width: 852px) {
      align-items: center;
    }
  `}

  ${props => props.footer && css`
    width: 100%;
    height: 50pt;
    background: #a8a8a8bf;
    display: flex;
    flex-direction: row;
    justify-content: center;
  `}

  ${props => props.slider && css`
    align-items: flex-start;
    gap: 10px;
    height: 0px auto;
    @media (max-width: 739px) {
      width: 78%;
    }
  `}

  ${props => props.card && css`
    width: 250px;
    height: 250px;
    gap: 10px;
    align-items: flex-start;
    text-align: justify;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    /* box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); */
    border-radius: 10px;
  `}

  ${props => props.inforCard && css`
    width: 100%;
    padding: 10px;
    gap: 10px;
    align-items: baseline;
    text-align: justify;
    height: 0px auto;
    border-radius: 10px;
  `}

  ${props => props.image && css`
    width: 0px auto;
    height: 0px auto;
    flex-direction: row;
    align-items: flex-start;
    gap: 13px;

    @media (max-width: 852px) {
      flex-direction: column;
      align-items: center;
    }
  `}

  ${props => props.branding && css`
    width: auto;
    height: 0px auto;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: baseline;
    align-content: center;
  `}

  ${props => props.social && css`
    height: 0px auto;
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 4px;
    align-items: baseline;
    background: #fff;

    @media (max-width: 852px) {
      padding-left: 27%;
    }

    @media (max-width: 681px) {
      padding-left: 24%;
    }

    @media (max-width: 609px) {
      padding-left: 21%;
    }

    @media (max-width: 565px) {
      padding-left: 19%;
    }

    @media (max-width: 505px) {
      padding-left: 16%;
    }

    @media (max-width: 470px) {
      padding-left: 13%;
    }
    
    @media (max-width: 419px) {
      padding-left: 10%;
    }

    @media (max-width: 384px) {
      padding-left: 5%;
    }

    @media (max-width: 363px) {
      padding-left: 1%;
    }
  `}
`

export default Container;