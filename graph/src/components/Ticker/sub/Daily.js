import React, { useEffect, useState } from 'react';

function Daily(props) {

    const [ currentVal, setCurrentVal ] = useState();
    const [ currentVol, setCurrentVol ] = useState();
    const [ data, setData ] = useState({});
    const [ open, setOpen ] = useState(false)

    const socket = new WebSocket(`wss://ws.finnhub.io?token=${process.env.REACT_APP_FINNKEY}`);

    let ticker = localStorage.getItem('ticker');
    if (ticker === '') {
        ticker = props.symbol;
    }

    // Connection opened -> Subscribe
    try {
        socket.addEventListener('open', function (event) {
            socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': ticker }))
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
    var unsubscribe = function (symbol) {
        socket.send(JSON.stringify({ 'type': 'unsubscribe', 'symbol': symbol }))
    }

    const buildURL = (ticker) => {
        let fetchInfo = "https://finnhub.io/api/v1/quote?symbol=";
        fetchInfo += ticker;
        fetchInfo += "&token=";
        fetchInfo += process.env.REACT_APP_FINNKEY;
        return fetchInfo;
    }

    const dailyData = () => {
        let url = buildURL(props.symbol);
        fetch(`${url}`)
            .then((res) => res.json())
            .then(data => {
                // console.log(`data`, data);
                isOpen();
                setData(data)
            })
    }

    const isOpen = () => {
        let url = 'https://financialmodelingprep.com/api/v3/market-hours?apikey=';
        url += process.env.REACT_APP_FMPKEY
        fetch(`${url}`)
            .then((res) => res.json())
            .then(data => {
                console.log(`data`, data);
                setOpen(data.isTheStockMarketOpen);
            })
    }

    useEffect(() => {
        dailyData();
    }, [props.symbol]);

    return (
        <div className="row">
            {console.log('open: ' + open)}
            {open !== true && (
                <div>
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
