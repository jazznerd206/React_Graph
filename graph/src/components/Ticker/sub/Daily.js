import React, { useEffect, useState } from 'react';

function Daily(props) {
    // console.log(`props.symbol`, props.symbol)

    const [ currentVal, setCurrentVal ] = useState();
    const [ currentVol, setCurrentVol ] = useState();
    const [ data, setData ] = useState({});

    const socket = new WebSocket(`wss://ws.finnhub.io?token=${process.env.REACT_APP_FINNKEY}`);

    let ticker = localStorage.getItem('ticker');
    console.log(`ticker`, localStorage.getItem('ticker'))
    if (ticker === '') {
        ticker = props.symbol;
    }
    console.log(`ticker --`, ticker)
    try {
        // Connection opened -> Subscribe
        socket.addEventListener('open', function (event) {
            socket.send(JSON.stringify({'type':'subscribe', 'symbol': ticker}))
        });
    } catch (error) {
        console.log(`error`, error)
    }

    // Listen for messages
    socket.addEventListener('message', function (event) {
        let d = JSON.parse(event.data);
        if (Array.isArray(d.data)) {
            console.log(`data`, d.data[0].p.toFixed(2), d.data[0].v);
            setCurrentVal(d.data[0].p.toFixed(2));
            setCurrentVol(d.data[0].v);
        }
    });

    // Unsubscribe
    var unsubscribe = function(symbol) {
        socket.send(JSON.stringify({'type':'unsubscribe','symbol': `AAPL`}))
    }

    const buildURL = (ticker) => {
        let fetchInfo = "https://finnhub.io/api/v1/quote?symbol=";
        fetchInfo += ticker;
        fetchInfo += "&token=";
        fetchInfo += process.env.REACT_APP_FINNKEY;
        return fetchInfo;
    }

    const dailyData = () => {
        let URL = buildURL(props.symbol);
        fetch(`${URL}`)
        .then((res) => res.json())
        .then(data => {
            setData(data)
        })
    }
    
    useEffect(() => {
        dailyData();
    }, [props.symbol])

    console.log('data: ', data);
    return (
        <div className="row">
            <div className="box">
                <p>current price: {currentVal}</p>
                <p>current volume: {currentVol}</p>
            </div>
            <div className="box">
                <p>Last Close: {data.pc}</p>
                <p>Open: {data.o}</p>
                <p>Close: {data.c}</p>
                <p>High: {data.h}</p>
                <p>Low: {data.l}</p>
            </div>
        </div>
    )
}

export default Daily
