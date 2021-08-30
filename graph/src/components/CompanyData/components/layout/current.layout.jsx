import styled from "styled-components";

export const DP = styled.p`
    color: ${props => props.theme.color};
    text-decoration: underline ${props => props.theme.color};
`

export const TabContainer = styled.div`
    position: relative;
    height: 50vh;
    width: 50vw;
    display: flex;
    flex: 1 1 auto;
    flex-grow: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const Tabs = styled.div`
    left: 0;
    width: 85%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

export const Tab = styled.div`
    width: 100%;
    display: flex;
    flex-grow: 1;
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

export const DataContainer = styled.div`
    width: 100%;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`