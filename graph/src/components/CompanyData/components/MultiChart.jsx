import React, { useState, useEffect } from 'react'
import { Radio } from '../../LoadingAnimation/animation.layout';
import { AreaChart } from 'react-chartkick';
import { Quarter } from '../data.layout';
import { Row } from '../../../basics/basic.layout';
import { intervals } from '../../globals/intervals';
import { Buttons } from '../../Graph/graph.layout';

function MultiChart({data, setInterval}) {

    if (data === {}) return <div>Loading...</div>
    else {
        return (
            <Quarter>
                <Buttons>
                    {intervals.map(button => {
                        return(
                            <Radio 
                                key={button.title} 
                                className="radio" 
                                onClick={() => setInterval(button.title)} 
                                id="gainers"
                            >
                                {button.title}
                            </Radio>
                        )
                    })}
                </Buttons>
                <AreaChart 
                    data={data} 
                    height={'20vh'}
                    width={'90vw'}
                    curve={true}
                    points={false}
                />
            </Quarter>
        )
    }
}

export default MultiChart;