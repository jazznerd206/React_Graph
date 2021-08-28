import styled from 'styled-components';

export const NewsContainer = styled.div`
    height: auto;
    width: 100%;
    max-height: 25vh;
    max-width: 100vw;
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-grow: 0;
    flex-direction: row;
    justify-content: flex-start;
`

export const MainStory = styled.div`
    display: flex;
    overflow: auto;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    min-width: min-content;
    & img {
        max-height: 10vh;
    }
`
export const SubStory = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`