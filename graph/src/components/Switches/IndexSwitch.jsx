import React from 'react';
import { ToggleContainer, Row, Ul, OpenButton, Content, DropList, Link } from '../../basics/basic.layout';
import { theme } from '../../basics/basic.theme'

function IndexSwitch(props) {

    console.log('props.index :>> ', props.index);

    return (
        <Ul>
            <DropList>
            <OpenButton>
                <h1>{props.query}</h1>
            </OpenButton>
            <Content style={{fontSize: '1em'}}>
                <Link onClick={() => props.chooseIndex("indices")}>Indices</Link>
                <Link onClick={() => props.chooseIndex("Gainers")}>Gainers</Link>
                <Link onClick={() => props.chooseIndex("Losers")}>Losers</Link>
                <Link onClick={() => props.chooseIndex("New")}>New</Link>
            </Content>
            </DropList>
        </Ul>
    )
}

export default IndexSwitch;
