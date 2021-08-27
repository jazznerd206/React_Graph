import React, { useState, useEffect } from 'react';
import { Page, Row, UserInput, List, Option, Label, Submit, I } from '../../basics/basic.layout';
import { Radio } from '../LoadingAnimation/animation.layout';
import { Upper, Lower, Data, Close, CompanyData } from './content.layout';
import Graph from '../Graph/Graph';


function Content(props) {

    const [ value, setValue ] = useState('');
    const [ active, setActive ] = useState(false);
    const [ dropdownList, setDropdownList ] = useState([]);
    const [ current, setCurrent ] = useState({});
    const [ d, setD ] = useState([]);
    const [ currentSymbol, setCurrentSynbol ] = useState('');

    const onChange = event => {
        event.preventDefault();
        let searchResults = props.search(props.trie, event.target.value);
        if (searchResults === undefined) {
            setDropdownList([]);
        } else {
            setDropdownList(searchResults);
        }
        setValue(event.target.value);
        return;
    }

    useEffect(() => {
        const upper = document.getElementById('upper');
        const lower = document.getElementById('lower');
        const label = document.getElementById('label');
        const button = document.getElementById('close');
        const graphs = document.getElementById('graphs');
        if (active === true) {
            label.innerHTML = '';
            lower.style.flexGrow = 1;
            upper.style.flexGrow = 0;
            button.style.display = 'flex';
            graphs.style.display = 'none';
        } else if (active === false) {
            label.innerHTML = ' stock symbol -> ';
            button.style.display = 'none';
            lower.style.flexGrow = 0;
            upper.style.flexGrow = 1;
            graphs.style.display = 'flex';
        }
    }, [active])

    useEffect(() => {
        setD(props.indices);
        // fetch these:
            // historical daily prices for indices line graph and stock price daily movement
            // insider trading volume/short float pie graphs
    }, [props.indices])

    return (
        <Page id="content">
            <Upper id="upper">
                <Row>
                    <Label id="label">Search for a symbol {' -> '}</Label>
                    <UserInput 
                        list="symbol"
                        value={value}
                        onChange={(e) => onChange(e)}
                        onClick={props.onClick} 
                        trie={props.trie} 
                        insert={props.insert}
                    />
                    <List id="symbol">
                        {dropdownList.map((symbol, index) => {
                            return <Option key={index} value={symbol}>{symbol}</Option>
                        })}
                    </List>
                    <Submit onClick={e => {props.onClick(e, value); setActive(true)}}></Submit>
                </Row>
                <Row id="graphs">
                    <Graph id="graph" indices={props.indices}>
                    </Graph>
                </Row>
            </Upper>
            <Lower id="lower">
                <Data>
                    <Close>
                        <I id="close" onClick={() => {setActive(false); setValue('');}} className="fas fa-times fa-2x"></I>
                    </Close>
                    <CompanyData>
                    </CompanyData>
                </Data>
            </Lower>
        </Page>
    )
}

export default Content;