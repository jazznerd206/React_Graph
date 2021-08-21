import React from 'react';
import { ToggleContainer, Row, Ul, OpenButton, Content, DropList, Link } from '../../basics/basic.layout';
import { theme } from '../../basics/basic.theme'

function IndexSwitch(props) {

    console.log('props.index :>> ', props.index);

    return (
        <Ul>
            <DropList>
            <OpenButton>
                <h1>{props.index}</h1>
            </OpenButton>
            <Content>
                <Link onClick={() => props.chooseIndex("nyse")}>NYSE</Link>
                <Link onClick={() => props.chooseIndex("sp500")}>SP 500</Link>
            </Content>
            </DropList>
        </Ul>
    )
}

export default IndexSwitch;
