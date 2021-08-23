import React, { useState, useEffect } from 'react';
import { Page, UserInput } from '../../basics/basic.layout';
import Input from '../Input/Input';
import Ticker from '../Ticker/Ticker';


function Content(props) {
    return (
        <Page>
            <UserInput onClick={props.onClick} trie={props.trie} insert={props.insert} onSearch={props.onSearch} />
            {/* <Ticker loading={props.loading} data={props.data} peerClick={props.peerClick} /> */}
        </Page>
    )
}

export default Content
