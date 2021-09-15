import React, { useState, useEffect } from 'react'
import { Row, P, H3 } from '../../../basics/basic.layout';
import { RowData, RowTitle, Table, TableRow } from '../components/layout/current.layout'

function Metrics({data, altData}) {

    const [ dataRenderable, setDataRenderable ] = useState(['initial']);

    useEffect(() => {
        console.log('data2 :>> ', data);
        if (data === null || data === undefined || altData === null || altData === undefined) return <div>Loading...</div>
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
                data: '$' + altData.previousClose,
            },
            {
                name: 'Day Hi/Lo',
                data: ['$' + altData.dayHigh, '$' + altData.dayLow],
            },
            {
                name: 'Year Hi/Lo',
                data: ['$' + altData.yearHigh, '$' + altData.yearLow],
            },
            {
                name: 'Market Cap',
                data: '$' + altData.marketCap,
            },
            {
                name: 'P/E Ratio',
                data: altData.pe,
            },
            {
                name: 'Earnings P/S',
                data: '$' + altData.eps,
            },
            // {
            //     name: 'Next Earnings',
            //     data: altData.earningsAnnouncement.substring(0,10)
            // },
            {
                name: 'Shares Outstanding',
                data: altData.sharesOutstanding,
            },
            // {
            //     name: 'Last Dividend',
            //     data: '$' + data.lastDiv,
            // },
        ]
        setDataRenderable(neo);
    }, [data, altData])
    return (
        <Row>
            <Table>
                {dataRenderable.map(el => {
                    return (
                        <TableRow key={el.name}>
                            <RowTitle>
                                <H3>{el.name}{' -> |'}</H3>
                            </RowTitle>
                            <RowData>
                                <P>{el.length === 2 ? el.data[0] + ' / ' + el.data[1] : el.data || 'n/a'}</P>
                            </RowData>
                        </TableRow>
                    )
                })}
            </Table>
        </Row>
    )
}

export default Metrics;
