import React, { useState, useEffect } from 'react';
import { Page, UserInput, Label, Submit, I } from '../../basics/basic.layout';
import { Upper, Lower, Data, Close } from './content.layout';


function Content(props) {

    const [ value, setValue ] = useState('');
    const [ active, setActive ] = useState(false);
    const [ dropdownList, setDropdownList ] = useState([]);

    // const submitSymbol = () => {
    //     console.log('value :>> ', value);
    //     setActive(true);
    // }

    const onChange = event => {
        event.preventDefault();
        setValue(event.target.value);
        let searchResults = props.search(props.trie, value);
        if (searchResults === undefined) {
            setDropdownList([]);
        } else {
            setDropdownList(searchResults);
        }
        console.log('value, dropdownList :>> ', event.target.value, dropdownList);
    }

    useEffect(() => {
        const upper = document.getElementById('upper');
        const lower = document.getElementById('lower');
        const label = document.getElementById('label');
        const button = document.getElementById('close');
        if (active === true) {
            label.innerHTML = '';
            lower.style.flexGrow = 1;
            upper.style.flexGrow = 0;
            button.style.display = 'flex';
        } else if (active === false) {
            label.innerHTML = ' stock symbol -> ';
            button.style.display = 'none';
            lower.style.flexGrow = 0;
            upper.style.flexGrow = 1;
        }
    }, [active])

    useEffect(() => {
        // console.log('props.trie :>> ', props.trie);
    }, [])

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
                    // search={props.search} 
                />

                <Submit onClick={e => {props.onClick(e, value); setActive(true)}}></Submit>
            </Upper>
            <Lower id="lower">
                <Data>
                    <Close>
                        <I id="close" onClick={() => {setActive(false); setValue('');}} className="fas fa-times fa-2x"></I>
                    </Close>
                </Data>
            </Lower>
        </Page>
    )
}

export default Content;