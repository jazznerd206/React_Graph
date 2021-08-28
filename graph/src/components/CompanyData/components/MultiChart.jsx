import React, { useState, useEffect } from 'react'
import { Radio } from '../../LoadingAnimation/animation.layout';
import { LineChart } from 'react-chartkick';
import { Quarter } from '../data.layout';
import { Row } from '../../../basics/basic.layout';

function MultiChart({data, setInterval}) {

    const intervals = [
        {
            title: '1yr',
            length: 'year'
        },
        {
            title: '6mo',
            length: '6mo'
        },
        {
            title: '3mo',
            length: '3mo'
        },
        {
            title: '1mo',
            length: '1mo'
        },
        {
            title: '1w',
            length: '1w'
        },
    ]
    useEffect(() => {
        console.log('data :>> ', data);
    }, [data])
    if (data === {}) {
        return (
            <div>Loading</div>
        )
    } else {
        return (
            <Quarter>
                <Row>
                    {intervals.map(button => {
                        return(
                            <Radio key={button.title} className="radio" onClick={() => setInterval(button.length)} id="gainers">{button.title}</Radio>
                        )
                    })}
                </Row>
                <LineChart data={data} width={'50vw'}/>
            </Quarter>
        )
    }
}

export default MultiChart;