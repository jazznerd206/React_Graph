import React, { useEffect, useState } from 'react';
import { buildURL } from '../../../hooks/buildURL'

function Daily(props) {

    const [ currentVal, setCurrentVal ] = useState();
    const [ currentVol, setCurrentVol ] = useState();
    const [ data, setData ] = useState({});
    const [ open, setOpen ] = useState(false)

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
        if (time < 8 || time > 16) return false
        if (time === 8) {
            if (d.getMinutes() < 30) return false;
            return true;
        }
        return true;
    }

    useEffect(() => {
        console.log(`ticker : props.symbol `, ticker, props.symbol)
        let symbol = props.symbol === undefined ? localStorage.getItem('ticker') : props.symbol;
        fetch(buildURL(symbol, 'quote', 'FINN'))
            .then((res) => res.json())
            .then(data => {
                console.log(`props.symbol`, props.symbol);
                setData(data)
                console.log(`props.symbol`, props.symbol);
            })
    }, [props]);

    useEffect(() => {
        if (isOpen()) setOpen(true);
    }, [data])

    return (
        <div className="row mobile-daily">
            {open !== true && (
                <div className="box current">
                    <h1>get a life,</h1>
                    <h1>markets are closed.</h1>
                </div>
            )}
            {open === true && (
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
                    <span>{data.pc}</span>
                </div>
                <div className="row">
                    <p>open</p>
                    <span>{data.o}</span>
                </div>
                <div className="row">
                    <p>close</p>
                    <span>{data.c}</span>
                </div>
            </div>
            <div className="box hi-lo">
                <div className="row">
                    <p>hi</p>
                    <span>{data.h}</span>
                </div>
                <div className="row">
                    <p>lo</p>
                    <span>{data.l}</span>
                </div>
            </div>
        </div>
    )
}

export default Daily
