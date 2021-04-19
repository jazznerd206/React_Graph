import React, { useState } from 'react';
import './styles.css';

function Input(props) {

    const [ value, setValue ] = useState('');

    const [ dropdownList, setDropdownList ] = useState([])

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

    return (
        <div className="symbol-form">
            <form>
                <label htmlFor="symbol" className="label">Symbol: </label>
                    <input
                        type="input"
                        list="symbol"
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