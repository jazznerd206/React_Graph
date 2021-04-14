import React, { useState, useEffect } from 'react';
import { buildURL } from '../../../../../hooks/buildURL'
function BuyHold(props) {
    
    let s = props.symbol;
    const [ data, setData ] = useState({});
    
    useEffect(() => {
        if (s === '') return;
        fetch(buildURL(s, 'reco', 'FINN'))
            .then((res) => res.json())
            .then(data => {
                setData(data)
            })
        let titles = document.querySelectorAll('h1');
        titles.forEach(title => {
            title.classList.add('flash');
        })
        setTimeout(() => {
            titles.forEach(title => {
                title.classList.remove('flash');
            })
            }, 3000);
    }, [s])

    if (data[0] !== undefined) {
        return (
        <div className="buyHold-container">
            <h1>buy/hold</h1>
            <div className="buy box">
                <span>{data[0].buy}</span>
                <p>BUY</p>
            </div>
            <div className="neutral box">
                <span>{data[0].hold}</span>
                <p>HOLD</p>
            </div>
            <div className="sell box">
                <span>{data[0].sell}</span>
                <p>SELL</p>
            </div>
        </div>
    )} else  {
        return (
            <div>
                <h1>NO DATA</h1>
            </div>
        )
    }
}

export default BuyHold
