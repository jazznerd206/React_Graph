import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: '${props => props.theme.font}';
    color: '${props => props.theme.color}';
    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
      width: 10px;
      background-color: ${props => props.theme.bgalt};
    }
    ::-webkit-scrollbar-track {
      width: 10px;
      background-color: ${props => props.theme.bgalt};
    }
    ::-webkit-scrollbar-thumb {
      -webkit-box-shadow: inset 0 0 6px ${props => props.theme.bg};
	    border-radius: 10px;
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