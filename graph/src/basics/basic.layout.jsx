import styled from 'styled-components';

export const Page = styled.div`
    margin: 0 auto;
    padding: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: ${props => props.theme.color};
    text-decoration: '${props => props.theme.deco}';
    @media (max-width: 768px) {
      flex-direction: row;
    }
`

export const HiddenBonus = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const I = styled.i`
  padding: 5px 5px;
  color: ${props => props.theme.deco};
  transform: scale(1);
  cursor: pointer;
  z-index: 999;
  transition: all .05s ease-in-out;
  &:active {
    color: ${props => props.theme.color};
    transform: scale(1.1);
  }
`

export const A = styled.a`
  color: ${props => props.theme.color};
  text-decoration: underline ${props => props.theme.color};
  cursor: pointer;
`

export const LandingTitle = styled.h1`
  margin-right: 1em;
  @media (max-width: 768px) {
    margin: 3em auto;
  }
`

export const Row = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    &${I} {
      margin-left: 5em;
    }
    overflow-x: scroll;
    scroll-behavior: smooth;
    @media (max-width: 768px) {
      text-align: center;
      flex-direction: column;
      height: 100%;
    } 
`

export const ToggleContainer = styled.button`
    position: fixed;
    display: inline-block;
    top: 1em;
    left: 1em;
    margin: 0 auto;
    padding: 0;
    z-index: 999;
    @media (max-width: 768px) {
      position: absolute;
    }
`;
    
export const Ul = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
`;
    
export const Li = styled.li`
    float: left;
    cursor: pointer;
`;
    
export const OpenButton = styled.div`
    margin: 0;
    display: inline-block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    border: 1px solid ${props => props.theme.coloralt};
`;

export const Content = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropList = styled(Li)`
  display: inline-block;
  &:hover {
    background-color: red;
  }
  &:hover ${Content} {
    display: block;
  }
`;

export const Link = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Tag = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: inline-block;
  `

export const DataAttr = styled.p`
  color: white;
  font-size: xx-small;
  @media (max-width: 768px) {
    font-size: .1em;
  }
`

export const UserInput = styled.input`
  /* position: relative; */
  width: 5em;
  height: 1.5em;
  font-size: 1.25em;
  padding: .25em;
  background: ${props => props.theme.deco};
  text-transform: uppercase;
  @media (max-width: 768px) {
    margin: 1em auto;
  }
`

export const List = styled.datalist`
    position: absolute;
    background-color: #f6f6f6;
    min-width: 230px;
    max-height: 500px;
    overflow: auto;
    border: 1px solid rgb(155, 147, 147);
    z-index: 1;
`

export const Option = styled.option`
  
`

export const Label = styled.label`
  padding-right: 2em;
  font-size: inherit;
  @media (max-width: 768px) {
    display: none;
  }
`
export const Submit = styled.input.attrs({ 
    type: 'submit',
    value: 'Search'
  })`
  background: ${props => props.theme.bgalt};
  color: ${props => props.theme.coloralt};
  font-family: ${props => props.theme.font};
  cursor: pointer;
  text-transform: uppercase;
  width: 5em;
  border-radius: 5px;
  height: 3em;
  margin-left: 3em;
  border: none;
  transition: 0.15s;
  text-align: center;
  &:active {
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.color};
    border: .5px solid ${props => props.theme.deco};
  }
  @media (max-width: 768px) {
    margin-left: none;
    margin: 0 auto;
  }
`

export const H3 = styled.h2`
  font-variant: small-caps;
  color: ${props => props.theme.color};
  text-decoration: underline ${props => props.theme.coloralt};
  @media (max-width: 768px) {
      font-size: 1em;
      padding: 0;
      margin: 0;
  }
`

export const P = styled.p`
  color: ${props => props.theme.color};
  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
    font-size: .75em;
  }
`

export const Up = styled.p`
  color: green;
  text-decoration: none;
`

export const Down = styled.p`
  color: red;
  text-decoration: none;
`