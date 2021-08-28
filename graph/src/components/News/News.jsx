import React from 'react'
import { I, H3, P } from '../../basics/basic.layout';
import { NewsContainer, MainStory, StoryRow, Img } from './news.layout';

function News(props) {
    return (
        <NewsContainer id="news">
            <I className="fas fa-times fa-2x" onClick={()=> props.shrink()}></I>
            <StoryRow>
                {props.stories.map(el => {
                    if (el.image === '') {
                        return null;
                    } else {
                        return(
                            <MainStory key={el.publishedDate}>
                                <Img src={el.image}></Img>
                                <H3>{el.title.substring(0, 100)}{'...'}</H3>
                                <P>{el.text.substring(0, 100)}{'...'}</P>
                            </MainStory>
                        )
                    }
                })}
            </StoryRow>
        </NewsContainer>
    )
}

export default News;
