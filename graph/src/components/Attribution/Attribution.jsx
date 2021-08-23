import React from 'react';
import { Tag, DataAttr } from '../../basics/basic.layout'

function Attribution() {
    return (
        <Tag>
            <DataAttr className="data-attr">
                Data provided by 
                <a href="https://financialmodelingprep.com/developer/docs/" target="_blank" rel="noreferrer">
                    financial modeling prep
                </a>
                Images provided by 
                <a href="https://pngtree.com/so/Blue" target="_blank" rel="noreferrer">
                    BluePNG
                </a>
            </DataAttr>
        </Tag>
    )
}

export default Attribution;
