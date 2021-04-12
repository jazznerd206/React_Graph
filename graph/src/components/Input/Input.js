import React, { useState, useEffect } from 'react';
import './styles.css';
// import { CreateTrie } from '../../hooks/symbolTrie';

function Input(props) {

    const [ value, setValue ] = useState('');

    const [ dropdownList, setDropdownList ] = useState([])

    const onChange = event => {
        event.preventDefault();
        let sList = props.onSearch(props.trie, event.target.value);
        console.log(`List of symbols generated from trie: ${sList}`);
        setDropdownList(sList);
        setValue(event.target.value);
    }

    return (
        <div className="symbol-form">
            <form>
                <label htmlFor="symbol" className="label">Symbol: </label>
                    <input
                        className=""
                        type="input"
                        list="symbol"
                        name="symbol"
                        value={value}
                        onChange={(e) => onChange(e)}
                    />
                    <datalist id="symbol" name="symbolDD">
                        {dropdownList.map((symbol, index) => {
                            return <option key={index} value={symbol}>{symbol}</option>
                        })}
                    </datalist>
                <button type="submit" className='btn btn-success' onClick={e => props.onClick(e, value)}>Get quote</button>
            </form>
        </div>
    )
}

export default Input;