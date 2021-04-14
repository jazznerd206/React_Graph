import React, { useState, useEffect } from 'react';
import { buildURL } from '../../../../../hooks/buildURL';
import './styles.css';

// https://finnhub.io/api/v1/stock/metric?symbol=AAPL&metric=all&token=c1nloc237fkph7jrfvjg

function Hilo(props) {

    let s = props.symbol;
    const [data, setData] = useState([]);

    useEffect(() => {
        if (s === '') return;
        fetch(buildURL(s, 'metrics', 'FINN'))
            .then((res) => res.json())
            .then(data => {
                setData(data)
            })
        let titles = document.querySelectorAll('h1');
        console.log(`titles`, titles)
        titles.forEach(title => {
            title.classList.add('flash');
        })
        setTimeout(() => {
            titles.forEach(title => {
                title.classList.remove('flash');
            })
            }, 3000);
    }, [s])

    if (data.metric === undefined) {
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
