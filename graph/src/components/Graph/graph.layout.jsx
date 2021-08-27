import styled from 'styled-components';

export const Graph = styled.div`
    /* height: 100%; */
    /* width: 100%; */
    max-width: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: scroll;
`

export const Buttons = styled.div`
    max-width: 100vw;
    display: flex;
    flex-direction: row;
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
`