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