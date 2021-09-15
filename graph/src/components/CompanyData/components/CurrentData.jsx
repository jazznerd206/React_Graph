    import React, { useState, useEffect } from 'react'
import { Quarter } from '../data.layout';
import { Radio } from '../../LoadingAnimation/animation.layout';
import { Row, P } from '../../../basics/basic.layout';
import { DP, TabContainer, Tabs, TabLight, TabDark, DataContainer } from './layout/current.layout';
import Summary from '../tabComponents/Summary';
import Metrics from '../tabComponents/Metrics';
import Outlook from '../tabComponents/Outlook';

function CurrentData({data, data2, loading}) {

    let tabs = [ 
        {
            title: 'Summary',
            component: <Summary data={data} altData={data2} loading={loading}/>
        },
        {
            title: 'Metrics',
            component: <Metrics data={data} altData={data2} loading={loading}/>
        },
        // {
        //     title: 'Outlook',
        //     component: <div>Loading...</div>
        // }

    ]

    const [ active, setActive ] = useState(tabs[0]);

    // useEffect(() => {
    //     console.log('data from current data :>> ', data2);
    // }, [data2])

   
    
    const setTabs = (data) => {
        // console.log("clicked")
        // console.log('data :>> ', data);
        setActive(data);
    }

    useEffect(() => {
        setActive(tabs[0]);
    }, [])

    if (!data) return <Quarter></Quarter>;
    return (
        <TabContainer>
            <Tabs>
                {tabs.map((tab, index) => {
                    return tab.title === active.title ?
                         (
                        <TabDark 
                            className="tab"
                            id={`${tab.title}`} 
                            key={`${tab.title}`} 
                            onClick={() => setTabs(tab)}
                        >
                            {tab.title}
                        </TabDark>
                        )
                    :
                        <TabLight 
                            className="tab"
                            id={`${tab.title}`} 
                            key={`${tab.title}`} 
                            onClick={() => setTabs(tab)}
                        >
                            {tab.title}
                        </TabLight>
                    ;
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
