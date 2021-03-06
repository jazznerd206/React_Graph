import React from 'react';
import { Tag, DataAttr, P, A } from '../../basics/basic.layout'

function Attribution() {
    return (
        <Tag>
            <DataAttr className="data-attr">
                <span>Data provided by{' '}
                    <A href="https://financialmodelingprep.com/developer/docs/" target="_blank" rel="noreferrer">
                        financial modeling prep
                    </A>
                </span>
            </DataAttr>
        </Tag>
    )
}

export default Attribution;
