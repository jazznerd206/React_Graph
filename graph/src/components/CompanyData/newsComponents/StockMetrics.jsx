import React from 'react'
import { DP } from '../components/layout/current.layout'
import { P } from '../../../basics/basic.layout'

function StockMetrics(props) {
    return (
        <>
            <DP>{'Industry => '}{props.data.industry}</DP>
            <DP>{'Price => $'}{props.data.price}</DP>
            <DP>{'Avg Vol => '}{props.data.volAvg}</DP>
            <P>{props.data.description.substring(0, 512)}{'...'}</P>
        </>
    )
}

export default StockMetrics;
