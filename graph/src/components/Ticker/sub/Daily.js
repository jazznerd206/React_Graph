import React, { useEffect, useState } from 'react';
import { buildURL } from '../../../hooks/buildURL'

function Daily(props) {

    let FINN = props.data.FINNquote;
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

    const isOpen = () => {
        let d = new Date();
        if (d.getDay() === 0 || d.getDay() === 6) return false;
        let time = d.getHours();
        if (time < 5 || time > 15) return false
        if (time === 5) {
            if (d.getMinutes() < 30) return false;
            return true;
        }
        if (time === 14) {
            if (d.getMinutes() < 30) return true;
            return false;
        }
        return true;
    }

    return (
        <div className="row mobile-daily">
            {isOpen() !== true && (
                <div className="box current">
                    <h1>get a life,</h1>
                    <h1>markets are closed.</h1>
                </div>
            )}
            {isOpen() === true && (
                <div className="box current">
                    <p>{currentVal}</p>
                    <div className="row">
                        <p>vol</p>
                        <span>{currentVol}</span>
                    </div>
                </div>
            )}
            <div className="box historical">
                <div className="row">
                    <p>last close</p>
                    <span>{FINN.pc}</span>
                </div>
                <div className="row">
                    <p>open</p>
                    <span>{FINN.o}</span>
                </div>
                <div className="row">
                    <p>close</p>
                    <span>{FINN.c}</span>
                </div>
            </div>
            <div className="box hi-lo">
                <div className="row">
                    <p>hi</p>
                    <span>{FINN.h}</span>
                </div>
                <div className="row">
                    <p>lo</p>
                    <span>{FINN.l}</span>
                </div>
            </div>
        </div>
    )
}

export default Daily
