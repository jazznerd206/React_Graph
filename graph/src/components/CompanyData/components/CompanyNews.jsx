import React, { useState, useEffect } from 'react';
import { CNImg } from './layout/news.layout';
import { Quarter } from '../data.layout';
import { CompanyNewsContainer, OneShot, MultiShot, CNText, AbsoluteText, MultImg, Rel } from './layout/news.layout'
import { A, H3, P } from '../../../basics/basic.layout';

function CompanyNews({data}) {

    // useEffect(() => {
    //     console.log('data :>> ', data);
    // }, [data])

    if (data === undefined) return <div>Loading...</div>
    else return (
        <Quarter>
            <CompanyNewsContainer>
                <OneShot>
                    <CNImg src={data[0].image}/>
                    <CNText>
                        <H3>{data[0].title}</H3>
                        <P>{data[0].text.substring(0, 50)}{'...'}</P>
                    </CNText>
                </OneShot>
                <MultiShot>
                    {data.map((story, index) => {
                        if (!story.image) return null;
                        else return (
                            <Rel key={`story${index}`}>
                                <MultImg src={story.image} />
                                <AbsoluteText>
                                    <A href={story.url} rel="noopener noreferrer" target="_blank" ><P>{story.title}</P></A>
                                </AbsoluteText>
                            </Rel>
                        )
                    })}
                </MultiShot>
            </CompanyNewsContainer>
        </Quarter>
    )
}

export default CompanyNews;