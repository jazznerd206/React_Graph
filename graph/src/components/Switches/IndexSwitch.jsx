import React from 'react';
import { Ul, OpenButton, Content, DropList, Link } from '../../basics/basic.layout';

function IndexSwitch(props) {
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
