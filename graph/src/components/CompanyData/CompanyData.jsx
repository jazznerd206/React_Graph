import React, { useState, useEffect } from 'react'
import MultiChart from './components/MultiChart';
import { DataContainer } from './data.layout';
import CurrentData from './components/CurrentData';
import AdvancedData from './components/AdvancedData';
import Biographical from './components/Biographical';

function CompanyData({data}) {

    const [ graphData, setGraphData] = useState({});
    const [ loading, setLoading ] = useState(true);
    const [ interval, setInterval ] = useState('1yr');
    
    useEffect(() => {
        if (data.graphData === undefined) return;
        let term = 365;
        switch(interval) {
            case 'year':
                term = 365;
                break;
            case '6mo':
                term = 187;
                break;
            case '3mo':
                term = 93;
                break;
            case '1mo':
                term = 30;
                break;
            case '1w':
                term = 7;
            default:
                break;
        }
        let temp = {};
        for (let i = 0; i < term; ++i) {
            temp[data.graphData.historical[i].date] = data.graphData.historical[i].close;
        }
        setGraphData(temp);
        setLoading(true);
    }, [data.graphData, interval])


        return (
            <DataContainer id='company'>
                {/* company name and biographicals, top left */}
                <Biographical data={data.FMPdata}/>
                {/* current price and simple data, top right */}
                <CurrentData data={data.FMPdata} />
                {/* chart, current price with volumes if you can manage it */}
                <MultiChart data={graphData} setInterval={setInterval}/>
                {/* pie graph of buy/sell, advanced data */}
                <AdvancedData data='Advanced Data' />
            </DataContainer>
        )
}

export default CompanyData
