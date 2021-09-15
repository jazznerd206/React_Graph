import styled from "styled-components";

export const Bio = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        padding-top: .5em;
        height: auto;
        flex-flow: row wrap;
    }
`