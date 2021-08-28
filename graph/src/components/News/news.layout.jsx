import styled from 'styled-components';
import { I } from '../../basics/basic.layout';

export const NewsContainer = styled.div`
    position: relative;
    height: auto;
    width: 100%;
    max-width: 100vw;
    overflow: scroll;
    display: flex;
    flex: 1;
    flex-grow: 0;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    transition: all .25s ease-in-out;
    & ${I} {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0%);
    }
`

export const MainStory = styled.div`
    display: flex;
    overflow: auto;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    overflow-x: scroll;
    margin: .1em;
    padding: .1em;
    border: .5px solid ${props => props.theme.bgalt};
    box-shadow: 0px 0px 10px ${props => props.theme.bgalt};
`
export const SubStory = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Img = styled.img`
    max-height: 200px;
    width: auto;
`

export const StoryRow = styled.div`
    padding-top: 3em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    overflow-x: scroll;
`