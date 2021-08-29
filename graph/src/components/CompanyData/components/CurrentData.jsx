import React from 'react';
import { Quarter } from '../data.layout';
import { P } from '../../../basics/basic.layout';
import { DP } from './current.layout';

function CurrentData({data}) {

    if (!data) return <Quarter></Quarter>;
    return (
        <Quarter>
            <DP>{'Industry => '}{data.industry}</DP>
            <DP>{'Price => '}{data.price}</DP>
            <DP>{'Avg Vol => '}{data.volAvg}</DP>
            <P>{data.description.substring(0, 256)}{'...'}</P>
        </Quarter>
    )
}

export default CurrentData
