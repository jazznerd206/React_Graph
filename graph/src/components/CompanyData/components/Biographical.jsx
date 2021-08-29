import React, {useEffect} from 'react'
import { H3, P, A } from '../../../basics/basic.layout'
import { FlexiTitle } from '../../Content/content.layout'
import { Quarter } from '../data.layout'
import { Bio } from './layout/bio.layout'

function Biographical({data}) {

    if (!data) return <Quarter></Quarter>
    else {
        return (
            <Quarter>
                <Bio>
                    <FlexiTitle>{data.companyName}</FlexiTitle>
                    <H3>{data.city !== "" ? data.city : null}{data.city !== '' ? ',' : null}{data.country}</H3>
                    {data.fullTimeEmployees !== null && <P>{data.fullTimeEmployees}{' employees'}</P>}
                    {data.website !== "" && <P><A href={data.website} rel="noopener noreferrer" target="_blank">website</A></P>}
                </Bio>
            </Quarter>
        )
    }
}

export default Biographical
