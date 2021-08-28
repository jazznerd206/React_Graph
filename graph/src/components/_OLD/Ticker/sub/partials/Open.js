import React, { useState } from 'react'

function Open(props) {

    const [ currentVal, setCurrentVal ] = useState();
    const [ currentVol, setCurrentVol ] = useState();

    const socket = new WebSocket(`wss://ws.finnhub.io?token=${process.env.REACT_APP_FINNKEY}`);

    let ticker = props.symbol;
    if (ticker === '') {
        ticker = localStorage.getItem('ticker');
    }

    // Connection opened -> Subscribe
    try {
        socket.addEventListener('open', function (event) {
            socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': ticker }))
            // unsubscribe(ticker)
        });
    } catch (error) {
        console.log(`error`, error)
    }

    // Listen for messages
    socket.addEventListener('message', function (event) {
        let d = JSON.parse(event.data);
        if (Array.isArray(d.data)) {
            // console.log(`data`, d.data[0].p.toFixed(2), d.data[0].v);
            setCurrentVal(d.data[0].p.toFixed(2));
            setCurrentVol(d.data[0].v);
        }
    });

    // Unsubscribe
    var unsubscribe = function (symbol) {
        socket.send(JSON.stringify({ 'type': 'unsubscribe', 'symbol': symbol }))
    }

    return (
        <div className="current-row">
            <div className="box current">
                <div className="row">
                    <p>price: </p>
                    <span>{currentVal}</span>
                </div>
                <div className="row">
                    <p>vol: </p>
                    <span>{currentVol}</span>
                </div>
            </div>
            {/* <div className="box current">
               <h1>for now, placeholder</h1>
            </div> */}
        </div>
    )
}

export default Open
