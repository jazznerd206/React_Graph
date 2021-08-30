import React, { useState, useEffect } from 'react'
import { Quarter } from '../data.layout';
import { Radio } from '../../LoadingAnimation/animation.layout';
import { Row, P } from '../../../basics/basic.layout';
import { DP, TabContainer, Tabs, Tab, DataContainer } from './layout/current.layout';
import StockMetrics from '../newsComponents/StockMetrics';
import Ownership from '../newsComponents/Ownership';
import Outlook from '../newsComponents/Outlook';

function CurrentData({data}) {

    let tabs = [ 
        {
            title: 'Metrics',
            component: <StockMetrics data={data}/>
        },
        {
            title: 'Ownership',
            component: <Ownership />
        },
        {
            title: 'Outlook',
            component: <Outlook />
        }

    ]
    const [ active, setActive ] = useState(tabs[0]);

    useEffect(() => {
        // let el = document.getElementById(`tab${active}`);
        // console.log(`el`, el)
    }, [active])

    if (!data) return <Quarter></Quarter>;
    return (
        <TabContainer>
            <Tabs>
                {tabs.map((tab, index) => {
                    return (
                        <Tab id={`tab${tab.title}`} key={`tab${tab.title}`} onClick={() => setActive(tabs[index])}>{tab.title}</Tab>
                    )
                })}
            </Tabs>
            <DataContainer>
                {active.component}
            </DataContainer>
        </TabContainer>
    )
}

export default CurrentData


            // {/* <DP>{'Industry => '}{data.industry}</DP>
            // <DP>{'Price => $'}{data.price}</DP>
            // <DP>{'Avg Vol => '}{data.volAvg}</DP>
            // <P>{data.description.substring(0, 256)}{'...'}</P> */}
