import React, { useState, useEffect } from 'react'
import { LineChart } from 'react-chartkick';
import { DataContainer, Biographical, CurrentData, MultiChart, AdvancedData } from './data.layout';

function CompanyData({data}) {

    const [ graphData, setGraphData] = useState({});
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        if (data.graphData === undefined) return;
        else {
            let temp = {};
            for (let i = 0; i < 300; ++i) {
                temp[data.graphData.historical[i].date] = data.graphData.historical[i].close;
            }
            setGraphData(temp);
        }
        setLoading(true);
    }, [graphData])

    if (data.graphData === undefined) {
        return (
            <div id="company"></div>
        )
    } else {
        return (
            <DataContainer id='company'>
                {/* company name and biographicals, top left */}
                <Biographical>
                    <h1>{data.FMPquote?.name}</h1>
                </Biographical>
                {/* current price and simple data, top right */}
                <CurrentData>
                    <h1>Current Data</h1>
                </CurrentData>
                {/* chart, current price with volumes if you can manage it */}
                <MultiChart>
                    <LineChart data={graphData}/>
                </MultiChart>
                {/* pie graph of buy/sell, advanced data */}
                <AdvancedData>
                    <h1>Advanced Data</h1>
                </AdvancedData>
            </DataContainer>
        )
    }
}

export default CompanyData
