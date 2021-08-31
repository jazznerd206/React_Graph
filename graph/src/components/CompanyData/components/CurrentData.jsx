import React, { useState, useEffect } from 'react'
import { Quarter } from '../data.layout';
import { Radio } from '../../LoadingAnimation/animation.layout';
import { Row, P } from '../../../basics/basic.layout';
import { DP, TabContainer, Tabs, Tab, DataContainer } from './layout/current.layout';
import Summary from '../tabComponents/Summary';
import Metrics from '../tabComponents/Metrics';
import Outlook from '../tabComponents/Outlook';

function CurrentData({data, data2}) {

    useEffect(() => {
        console.log('data from current data :>> ', data2);
    }, [data2])

    let tabs = [ 
        {
            title: 'Summary',
            component: <Summary data={data}/>
        },
        {
            title: 'Metrics',
            component: <Metrics data={data} altData={data2}/>
        },
        // {
        //     title: 'Outlook',
        //     component: <Outlook />
        // }

    ]
    const [ active, setActive ] = useState(tabs[0]);

    useEffect(() => {
        let el = document.getElementById(`tab${active}`);
    }, [active])

    if (!data) return <Quarter></Quarter>;
    return (
        <TabContainer>
            <Tabs>
                {tabs.map((tab, index) => {
                    return (
                        <Tab 
                            id={`tab${tab.title}`} 
                            key={`tab${tab.title}`} 
                            onClick={() => setActive(tabs[index])}
                        >{
                            tab.title}
                        </Tab>
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
