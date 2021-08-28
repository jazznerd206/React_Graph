import React, { useState, useEffect } from 'react'
import { DataContainer, Biographical } from './data.layout';

function CompanyData({data}) {

    useEffect(() => {
        console.log('data :>> ', data);
    }, [data])
    if (data === undefined) {
        return null;
    } else {
        return (
            <DataContainer id='company'>
                {/* company name and biographicals, top left */}
                <Biographical>
                    <h1>{data.FMPquote?.name}</h1>
                </Biographical>
                {/* current price and simple data, top right */}
                {/* chart, current price with volumes if you can manage it */}
                {/* pie graph of buy/sell, advanced data */}
            </DataContainer>
        )
    }
}

export default CompanyData
