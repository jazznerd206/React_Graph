import React from 'react'
import { DP } from '../components/layout/current.layout'
import { Down, P, Up } from '../../../basics/basic.layout'

function Summary(props) {
    return (
        <>
            <P>{props.data.description.length > 512 ? props.data.description.substring(0, 512): props.data.description}{'...'}</P>
        </>
    )
}

export default Summary;
