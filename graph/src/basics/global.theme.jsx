import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: '${props => props.theme.font}';
    color: '${props => props.theme.color}';
    ::-webkit-scrollbar {
      display: none;
    }
  }
  body {
    position: relative;
    min-height: 100vh;
    min-width: 100vw;
    margin: 0px 0px;
    padding: 0px 0px;
    background-color: ${props => props.theme.bg};
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`