import React from 'react'
import { H3, P } from '../../../basics/basic.layout'
import { FlexiTitle } from '../../Content/content.layout'
import { Quarter } from '../data.layout'
import { Bio } from './bio.layout'

function Biographical({data}) {
    console.log('data :>> ', data);
    if (!data) return <Quarter></Quarter>
    else {
        return (
            <Quarter>
                <Bio>
                    <FlexiTitle>{data.companyName}</FlexiTitle>
                    <H3>{data.city}{','}{data.country}</H3>
                    <P>{data.fullTimeEmployees}{' employees'}</P>
                </Bio>
            </Quarter>
        )
    }
}

export default Biographical
