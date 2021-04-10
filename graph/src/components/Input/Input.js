import React, { useState, useEffect } from 'react';
import './styles.css';
import Trie from '../../hooks/symbolTrie';

function Input(props) {

    const [value, setValue] = useState('');

    // const t = Trie();

    useEffect(() => {
        Trie(value);
    }, [value])

    // console.log('this should be the trie array: ' + t);

    return (
        <div className="symbol-form">
            <form>
                <label htmlFor="symbol" className="label">Symbol: </label>
                <input
                    className=""
                    type="input"
                    name="symbol"
                    onChange={(e) => setValue(e.target.value)} />
                <button type="submit" className='btn btn-success' onClick={e => props.onClick(e, value)}>Get quote</button>
            </form>
        </div>
    )
}

export default Input;