import React, { useState, useEffect } from 'react'
import { Row, P, H3 } from '../../../basics/basic.layout';
import { RowData, RowTitle, Table, TableRow } from '../components/layout/current.layout'

function Metrics({data, altData}) {

    const [ dataRenderable, setDataRenderable ] = useState(['initial']);

    useEffect(() => {
        console.log('data2 :>> ', altData);
        let neo = [
            {
                name: 'Exchange',
                data: data.exchangeShortName,
            },
            {
                name: 'Sector',
                data: data.sector,
            },
            {
                name: 'Industry',
                data: data.industry,
            },
            {
                name: 'Range',
                data: data.range,
            },
            {
                name: 'Todays Volume',
                data: altData.volume,
            },
            {
                name: 'Average Volume',
                data: data.volAvg,
            },
            {
                name: 'Previous Close',
                data: altData.previousClose,
            },
            {
                name: 'Year Hi/Lo',
                data: [altData.yearHigh, altData.yearLow],
            },
        ]
        setDataRenderable(neo);
    }, [data, altData])

    if (dataRenderable[0] === 'initial') return <div>Loading...</div>
    else return (
        <Row>
            <Table>
                {dataRenderable.map(el => {
                    return (
                        <TableRow key={el.name}>
                            <RowTitle>
                                <H3>{el.name}{' -> |'}</H3>
                            </RowTitle>
                            <RowData>
                                <P>{typeof el.data === Array ? el.data[0] + '/' + el.data[1] : el.data}</P>
                            </RowData>
                        </TableRow>
                    )
                })}
            </Table>
        </Row>
    )
}

export default Metrics;
