import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme.color)};
    background: ${props => (props.theme.bg)}
    font: ${props => (props.theme.font)}
    font-weight: ${props => (props.theme.fw)}
  }
`