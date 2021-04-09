import React, { useState, useEffect } from 'react';

function BuyHold(props) {
    
    let s = props.symbol;
    const [ data, setData ] = useState({});

    const buildURL = (ticker) => {
        let fetchInfo = "https://finnhub.io/api/v1/stock/recommendation?symbol=";
        fetchInfo += ticker;
        fetchInfo += "&token=";
        fetchInfo += process.env.REACT_APP_FINNKEY;
        return fetchInfo;
    }

    const fetchURL = () => {
        let URL = buildURL(s);
        fetch(`${URL}`)
        .then((res) => res.json())
        .then(data => {
            setData(data)
        })
    }
    
    useEffect(() => {
        if (s === '') return;
        fetchURL();
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
