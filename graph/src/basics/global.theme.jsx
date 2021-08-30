import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: '${props => props.theme.font}';
    color: '${props => props.theme.color}';
    ::-webkit-scrollbar {
      display: none;
    }
  }
  body {
    position: relative;
    height: 100%;
    width: 100%;
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