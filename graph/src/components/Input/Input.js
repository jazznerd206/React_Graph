import React, { useState } from 'react';
import './styles.css';

function Input(props) {

    const [ value, setValue ] = useState('');

    return (
        <div className="symbol-form">
            <form>
            <label htmlFor="symbol" className="label">Symbol: </label>
            <input
                className=""
                type="input"
                name="symbol"
                onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" className='btn btn-success' onClick={e => props.onClick(e, value)}>Get quote</button>
            </form>
        </div>
    )
}

export default Input;