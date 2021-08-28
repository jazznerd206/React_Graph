import React, { useState, useEffect } from 'react'
import { Row, I } from '../../basics/basic.layout'
import { GraphContainer, Buttons, Chart, ChartTitle } from './graph.layout';
import { Radio } from '../LoadingAnimation/animation.layout';
import { LineChart } from 'react-chartkick'
import { setGraphData } from '../../hooks/getGraphData';
import 'chartkick/chart.js';

function Graph(props) {

    const [ height, setHeight ] = useState(window.innerHeight);
    const [ width, setWidth ] = useState(window.innerWidth);
    const [ data, setData ] = useState([]);
    const [ graphData, setGData ] = useState({});
    const [ title, setTitle ] = useState('')

    useEffect(() => {
        window.addEventListener('resize', () => {
            setHeight(window.innerHeight);
            setWidth(window.innerWidth);
        })
        return () => window.removeEventListener("resize", () => {});
    }, [height, width])


    const setGraph = symbol => {
        setGraphData(symbol).then(data => {
            setGData(data);
        });
    }

    const graphTitle = name => {
        setTitle(name);
    }

    useEffect(() => {
        setGraph('^DJI')
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
                                    setGraph(item.symbol);
                                    graphTitle(item.name)
                                }}
                            >
                                {item.symbol}
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
            <Chart>
                <LineChart 
                    data={graphData} 
                    width={width}
                />
            </Chart>
        </GraphContainer>
    )
}

export default Graph;
