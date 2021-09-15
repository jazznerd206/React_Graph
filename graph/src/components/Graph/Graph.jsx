import React, { useState, useEffect } from 'react'
import { Row, I } from '../../basics/basic.layout'
import { GraphContainer, Buttons, Chart, ChartTitle } from './graph.layout';
import { Radio } from '../LoadingAnimation/animation.layout';
import { AreaChart } from 'react-chartkick'
import { setGraphData } from '../../hooks/getGraphData';
import { intervals } from '../globals/intervals';
import 'chartkick/chart.js';

function Graph(props) {

    const [ height, setHeight ] = useState(window.innerHeight);
    const [ width, setWidth ] = useState(window.innerWidth);
    const [ graphData, setGData ] = useState({});
    const [ title, setTitle ] = useState('');
    const [ interval, setInterval ] = useState('365');
    const [ symbol, setSymbol ] = useState('');

    useEffect(() => {
        window.addEventListener('resize', () => {
            setHeight(window.innerHeight);
            setWidth(window.innerWidth);
        })
        return () => window.removeEventListener("resize", () => {});
    }, [height, width])

    const setGraph = (symbol, ival) => {
        setSymbol(symbol);
        setGraphData(symbol, ival).then(data => {
            setGData(data);
        });
    }

    useEffect(() => {
        setGraph('^DJI', interval);
        setTitle('Dow Jones Industrial Average')
    }, [])
    
    return (
        <GraphContainer id="graph">
            <I className="fas fa-times fa-2x" onClick={()=> props.shrink()}></I>
            <Row>
                <Buttons>
                    {props.indices.map(item => {
                        return(
                            <Radio
                                key={`idx${item.index}`}
                                id={`idx${item.index}`}
                                onClick={() => {
                                    setGraph(item.symbol, interval);
                                    setTitle(item.name);
                                    setSymbol(item.symbol);
                                }}
                            >
                                {item.symbol}
                            </Radio>
                        )
                    })}
                </Buttons>
            </Row>
            <Row>
                <Buttons>
                {intervals.map(button => {
                    return (
                        <Radio
                            className="graph-selectors"
                            id={button.length}
                            key={button.title}
                            onClick={() => setGraph(symbol, button.length)}
                        >
                            {button.title}
                        </Radio>
                    )
                })}
                </Buttons>
            </Row>
            <Row>
                <ChartTitle>
                    {title}
                </ChartTitle>
            </Row>
            {graphData !== {} && 
                <Chart>
                    <AreaChart 
                        data={graphData.hist} 
                        width={width}
                        curve={true}
                        points={false}
                    />
                </Chart>
            }
        </GraphContainer>
    )
}

export default Graph;
