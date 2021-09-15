import styled from 'styled-components';

export const GraphContainer = styled.div`
    height: auto;
    width: 100%;
    max-width: 100vw;
    overflow: hidden;
    flex: 1;
    display: flex;
    flex-grow: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: scroll;
    transition: all .25s ease-in-out;
`

export const Buttons = styled.div`
    max-width: 100vw;
    display: flex;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-evenly;
    overflow-x: scroll;
`

export const Chart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ChartTitle = styled.h1`
    font-variant: small-caps;
    color: ${props => props.theme.color};
    text-shadow: 2px 2px ${props => props.theme.bgalt};
    @media (max-width: 768px) {
        font-size: 1.1em;
    }
`