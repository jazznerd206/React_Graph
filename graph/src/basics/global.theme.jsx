import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Space+Mono&display=swap");
@import url("https://fonts.googleapis.com/css?family=Yesteryear&display=swap");
@import url("https://fonts.googleapis.com/css?family=Oxygen+Mono&display=swap");
@import url("https://fonts.googleapis.com/css?family=Tenali+Ramakrishna&display=swap");
@import url("https://fonts.googleapis.com/css?family=Rozha+One&display=swap");
  * {
    margin: 0;
    padding: 0;
    font-family: '${props => props.theme.font}';
    color: '${props => props.theme.color}';
  }
  body {
    position: relative;
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.bg};
    /* background-image: url('${props => props.theme.bgi}'); */
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