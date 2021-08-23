import styled from 'styled-components';

export const Upper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    flex-grow: 1;
    transition: all 1s ease-in-out;
`

export const Lower = styled.div`
    /* z-index: 99; */
    background-image: url(${props => props.theme.bgi});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    /* border: 1px solid ${props => props.theme.deco}; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
    width: 100%;
    height: auto;
    margin: auto 2em;
    transition: all 1s ease-in-out;
    /* backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px ); */
    &:before {
        background-image: url(${props => props.theme.bgi});
    }
`