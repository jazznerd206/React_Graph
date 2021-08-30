import styled from "styled-components";

export const DataContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    transition: all .25s ease-in-out;
`

export const Quarter = styled.div`
    /* margin: 1em auto; */
    max-width: 45vw;
    max-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    flex-grow: 1;
    padding: 1em;
    border-radius: 25px;
`