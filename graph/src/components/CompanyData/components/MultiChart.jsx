import React, { useState, useEffect } from 'react'
import { Radio } from '../../LoadingAnimation/animation.layout';
import { AreaChart } from 'react-chartkick';
import { Quarter } from '../data.layout';
import { Row } from '../../../basics/basic.layout';
import { intervals } from '../../globals/intervals';

function MultiChart({data, setInterval}) {

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
                            <Radio key={button.title} className="radio" onClick={() => setInterval(button.title)} id="gainers">{button.title}</Radio>
                        )
                    })}
                </Row>
                <AreaChart data={data} width={'50vw'}/>
            </Quarter>
        )
    }
}

export default MultiChart;