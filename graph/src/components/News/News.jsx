import React from 'react'
import { I } from '../../basics/basic.layout';
import { Row } from '../../basics/basic.layout';
import { FlexiTitle } from '../Content/content.layout';
import { NewsContainer, MainStory } from './news.layout';

function News(props) {
    return (
        <NewsContainer id="news">
            <I className="fas fa-times fa-2x" onClick={()=> props.shrink()}></I>
            <Row>
            <FlexiTitle>News</FlexiTitle>
            </Row>
            {props.stories.map(el => {
                if (el.image === '') {
                    return null;
                } else {
                    return(
                        <MainStory key={el.publishedDate}>
                            <img src={el.image}></img>
                            <h4>{el.title}</h4>
                            {/* <p>{el.text.substring(0, 100)}{'...'}</p> */}
                        </MainStory>
                    )
                }
            })}
            
        </NewsContainer>
    )
}

export default News;
