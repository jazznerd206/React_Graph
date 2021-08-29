import styled from 'styled-components';

export const CompanyNewsContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const OneShot = styled.div`
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
`

export const MultiShot = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
    overflow-x: scroll;
`

export const CNImg = styled.img`
    max-height: 20vh;
    height: 100%;
    width: auto;
    margin: auto auto;
`

export const CNText = styled.div`
    text-align: left;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const MultImg = styled.img`
    max-height: 20vh;
    height: 100%;
    width: auto;
    margin: auto auto;
`

export const AbsoluteText = styled.div`
    text-align: center;
    position: absolute;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgb(0,0,0,.25);
    color: ${props => props.theme.color};
`

export const Rel = styled.div`
    position: relative;
    transition: all .25s ease-in-out;
    &:hover ${MultImg} {
        opacity: .5;
    }
    &:hover ${AbsoluteText} {
        display: flex;
    }
`