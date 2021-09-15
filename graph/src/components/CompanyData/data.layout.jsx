import styled from "styled-components";

export const DataContainer = styled.div`
    height: 100%;
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    transition: all .25s ease-in-out;
    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column wrap;
    }
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
    @media (max-width: 768px) {
        flex-direction: column wrap;
        /* max-height: 30vh; */
        min-width: 100%;
        margin: 0;
        padding: 0;
    }
`