import styled from 'styled-components';
import hidden_bg from '../../images/hidden_bg.png'

export const Popup = styled.div`
  background-image: url('https://www.pngplay.com/wp-content/uploads/9/Gopher-PNG-Clipart-Background.png');
  position: absolute;
  top: 100vh;
  left: 25px;
  transform: translate3d(0,0,0);
  transition: all 1s;
`

export const Shade = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex: 1 1 auto;
    flex-grow: 1;
    flex-direction: row;
    justify-content: space-evenly;
    background: ${props => props.theme.bg};
    border-bottom-left-radius: 25px;
    transition: .5s transform ease-in-out;
`


export const Layer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background: none;
    border-bottom-left-radius: 25px;
    transition: .5s all ease-in-out;
`

export const Element = styled.div`
    background: url(${hidden_bg}) no-repeat center center;
    background-size: cover;
    position: relative;
    top: 0px;
    right: 0px;
    border-bottom-left-radius: 25px;
    height: 25vh;
    width: 25vw;
    overflow: hidden;
    transition: .5s all ease-in-out;
`


export const Circle = styled.div`
    border: 5px solid ${props => props.theme.deco};
    width: 50%;
    border-radius: 50%;
    margin: 1em auto;
    background: rgb(0,0,0);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

export const Radio = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: .5px solid ${props => props.theme.deco};
    background: ${props => props.theme.bg};
    color: ${props => props.theme.color};
    border-radius: 25px;
    padding: .25em .5em;
    margin: .1em .5em;
    cursor: pointer;
    &:hover {
        border: .5px solid ${props => props.theme.bg};
        background: ${props => props.theme.bgalt};
        color: ${props => props.theme.coloralt};
    }
`

export const ScrollChild = styled.div`
    color: ${props => props.query === 'gainers' ? 'red' : 'green'};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin: 0 3em;
    `

export const Title = styled.div`
    font-size: xx-large;
    font-weight: 500;
`

export const Change = styled.div`
    font-size: medium;
    font-weight: 300;
`

export const Price = styled.div`
    font-size: large;
    font-weight: 400;
`

export const Bridge = styled.div`

`

