import styled from 'styled-components'

export const Page = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: center;
    background-color: ${props => props.theme.bg};
    background-image: url(${props => props.theme.bgi});
    color: ${props => props.theme.color};
    margin: 0;
    padding: 0;
`

export const Container = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const Row = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex: 1;
    flex-grow: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const ToggleContainer = styled.button`
    position: fixed;
    display: inline-block;
    top: 1em;
    left: 1em;
`

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

export const Li = styled.li`
  float: left;
`;

export const OpenButton = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
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