import styled from "styled-components";
import { P, H3 } from '../../../../basics/basic.layout';

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
    background: rgb(0,0,0,.25);
    border-bottom-left-radius: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 0;
    border: .1px solid ${props => props.theme.deco};
    overflow: scroll;
    @media (max-width: 768px) {
        height: auto;
        width: auto;
        flex-direction: column;
    }
    `

export const Tabs = styled.div`
    left: 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const TabLight = styled.div`
    pointer-events: all;
    width: auto;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: .5px solid ${props => props.theme.deco};
    color: ${props => props.theme.color};
    border-bottom-left-radius: 10px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    cursor: pointer;
    transition: all .25s ease-in-out;
    &:hover {
        background: ${props => props.theme.bgalt};
        color: ${props => props.theme.coloralt};
    }
`

export const TabDark = styled.div`
pointer-events: all;
    width: 60%;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    border-top: .5px solid ${props => props.theme.deco};
    border-left: .5px solid ${props => props.theme.deco};
    border-right: .5px solid ${props => props.theme.deco};
    border-bottom: none;
    color: ${props => props.theme.deco};
    border-bottom-left-radius: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 0;
    transition: all .25s ease-in-out;
    cursor: pointer;
`

export const DataContainer = styled.div`
    /* position: relative; */
    width: auto;
    height: auto;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-top: none;
    /* &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        bottom: 0;
        left: 0;
        border-left: .5px solid ${props => props.theme.deco};
        border-bottom: .5px solid ${props => props.theme.deco};
        border-right: .5px solid ${props => props.theme.deco};
    } */
    & ${P} {
        margin: 0 1em;
    }

`

export const Table = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
`

export const TableRow = styled.div`
    font-size: small;
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const RowTitle = styled.span`
    width: 50%;
    text-align: right;
    font-variant: small-caps;
    text-decoration: underline ${props => props.theme.bgalt};
    & ${H3} {
        color: ${props => props.theme.coloralt};
    }
`

export const RowData = styled.span`
    width: 50%;
    text-align: left;
    margin-left: 1em;
    font-size: large;
    & ${P} {
        color: ${props => props.theme.color};
    }
`