import React, { useState, useEffect } from 'react';
import './styles.css';
// import { CreateTrie } from '../../hooks/symbolTrie';

function Input(props) {

    console.log(`props.trie: `, props.trie)

    const [ value, setValue ] = useState('');

    const [ dropdownList, setDropdownList ] = useState([])

    const onChange = event => {
        event.preventDefault();
        // let searchResults = props.onSearch(props.trie, value);
        // console.log(`typeof searchResults`, typeof searchResults);
        // console.log(`List of symbols generated from trie: ${searchResults}`);
        // setDropdownList(searchResults);
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