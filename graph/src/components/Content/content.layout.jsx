import styled from 'styled-components';
import { I } from '../../basics/basic.layout' 

export const Upper = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    transition: all .5s ease-in-out;
    @media (max-width: 768px) {
        height: 100vh;
    }
`

export const Lower = styled.div`
    position: relative;
    display: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
    width: 100%;
    height: 0%;
    margin: auto 2em;
    transition: all .5s ease-in-out;
    &:before {
        background-image: url(${props => props.theme.bgi});
        content: "";
        background-size: cover;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.75;
    }
`

export const Data = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`

export const Close = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
`

export const FlexiBoi = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background: ${props => props.theme.bg};
    overflow: auto;
`

export const GrabBar = styled.div`
    position: relative;
    background: ${props => props.theme.bg};
    height: 10vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    & ${I} {
        position: absolute;
        top: 0px;
        right: 0px;
    }
`

export const FlexiTitle = styled.h1`
    color: ${props => props.theme.color};
    text-shadow: 1px 1px ${props => props.theme.coloralt};
    text-decoration: underline dotted ${props => props.theme.deco};
    text-align: center;
    cursor: pointer;
`