import React, { useState, useEffect } from 'react';
import { Page, UserInput, Label, Submit } from '../../basics/basic.layout';
import { Upper, Lower } from './content.layout';
import Input from '../Input/Input';
import Ticker from '../Ticker/Ticker';


function Content(props) {

    const [ value, setValue ] = useState('');
    const [ current, setCurrent ] = useState('');
    const [ dropdownList, setDropdownList ] = useState([]);

    const submitSymbol = () => {
        console.log('value :>> ', value);
        setCurrent(value);
    }

    const onChange = event => {
        event.preventDefault();
        let searchResults = props.onSearch(props.trie, event.target.value);
        if (searchResults === undefined) {
            setDropdownList([]);
        } else {
            setDropdownList(searchResults);
        }
        setValue(event.target.value);
    }

    useEffect(() => {
        if (current !== '') {
            const upper = document.getElementById('upper');
            const lower = document.getElementById('lower');
            const label = document.getElementById('label');
            label.innerHTML = '';
            lower.style.display = 'flex';
            lower.style.flexGrow = 1;
            upper.style.flexGrow = 0;
        }
    }, [current])



    return (
        <Page id="content">
            <Upper id="upper">
                <Label id="label">Search for a symbol {' -> '}</Label>
                <UserInput 
                    value={value}
                    onChange={(e) => onChange(e)}
                    onClick={props.onClick} 
                    trie={props.trie} 
                    insert={props.insert} 
                    onSearch={props.onSearch} />
                <datalist id="symbol" name="symbolDD">
                    {dropdownList.map((symbol, index) => {
                        return <option key={index} value={symbol}>{symbol}</option>
                    })}
                </datalist>
                <Submit onClick={submitSymbol}></Submit>
            </Upper>
            <Lower id="lower">
                <div>Lower</div>
            </Lower>
        </Page>
    )
}

export default Content

/* <Ticker loading={props.loading} data={props.data} peerClick={props.peerClick} /> */