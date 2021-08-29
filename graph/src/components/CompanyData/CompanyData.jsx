import React, { useState, useEffect } from 'react'
import MultiChart from './components/MultiChart';
import { DataContainer } from './data.layout';
import CurrentData from './components/CurrentData';
import AdvancedData from './components/AdvancedData';
import Biographical from './components/Biographical';
import CompanyNews from './components/CompanyNews';

function CompanyData({data}) {

    const [ graphData, setGraphData] = useState({});
    const [ loading, setLoading ] = useState(true);
    const [ interval, setInterval ] = useState('year');
    
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

    // useEffect(() => {
    //     console.log('data.news :>> ', data.news);
    // }, [data])


    return (
        <DataContainer id='company'>
            <Biographical data={data.FMPdata}/>
            <CurrentData data={data.FMPdata} />
            <MultiChart data={graphData} setInterval={setInterval}/>
            <CompanyNews data={data.news}/>
            {/* <AdvancedData data='Advanced Data' /> */}
        </DataContainer>
    )
}

export default CompanyData
