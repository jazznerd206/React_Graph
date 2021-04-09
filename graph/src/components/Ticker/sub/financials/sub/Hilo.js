import React, { useState, useEffect } from 'react';
import './styles.css';

// https://finnhub.io/api/v1/stock/metric?symbol=AAPL&metric=all&token=c1nloc237fkph7jrfvjg

function Hilo(props) {

    let s = props.symbol;
    const [data, setData] = useState([]);

    const buildURL = (t) => {
        let fetchInfo = "https://finnhub.io/api/v1/stock/metric?symbol=";
        fetchInfo += t;
        fetchInfo += "&metric=all&token=";
        fetchInfo += process.env.REACT_APP_FINNKEY;
        console.log(`fetchinfo`, fetchInfo);
        return fetchInfo;
    }

    const fetchURL = () => {
        let URL = buildURL(s);
        fetch(`${URL}`)
            .then((res) => res.json())
            .then(data => {
                // console.log(`data api response`, data);
                setData(data);
            })
    }

    useEffect(() => {
        if (s === '') return;
        fetchURL();
    }, [s])

    if (s === undefined) {
        return (
            <div>
                <h1>search for a symbol!!</h1>
            </div>
        )
    } else {
        return (
            <div className="hilo-container">
                <div className="row">
                    Annual Book Value
                </div>
                <div className="row">
                    {data.metric.bookValuePerShareAnnual}
                </div>
            </div>
        )
    }
}

export default Hilo
