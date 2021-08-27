import React, { useState, useEffect } from 'react'
import { Row } from '../../basics/basic.layout'
import { Buttons, Chart, ChartTitle } from './graph.layout';
import { Radio } from '../LoadingAnimation/animation.layout';
import { LineChart, PieChart } from 'react-chartkick'
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
    
    // useEffect(() => {
    //     console.log('data use effect :>> ', graphData);
    // }, [graphData])

    useEffect(() => {
        setGraph('^DJI')
        setTitle('Dow Jones Industrial Average')
    }, [])

    return (
        <div>
            <Row>
                <Buttons>
                    {props.indices.map(item => {
                        return(
                            <Radio 
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
        </div>
    )
}

export default Graph;
