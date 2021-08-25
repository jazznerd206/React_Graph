import styled from 'styled-components';

export const Upper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    flex-grow: 1;
    transition: all .5s ease-in-out;
`

export const Lower = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
    width: 100%;
    height: auto;
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

export const CompanyData = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`