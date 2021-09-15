import React from 'react'
import { DP } from '../components/layout/current.layout'
import { Down, P, Up } from '../../../basics/basic.layout'

function Summary({loading, data}) {
    if (loading === true || data === undefined) return <div>Loading...</div>
    else return (
        <>
            <P>{data.description.length > 512 ? data.description.substring(0, 512): data.description}{'...'}</P>
        </>
    )
}

export default Summary;
