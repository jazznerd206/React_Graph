import React, { useState, useEffect } from 'react';
import './styles.css';

function Peers(props) {
    console.log(props);
    const [peerList, setPeerList] = useState([]);

    const buildURL = (ticker) => {
        let fetchInfo = "https://finnhub.io/api/v1/stock/peers?symbol=";
        fetchInfo += ticker;
        fetchInfo += "&token=";
        fetchInfo += process.env.REACT_APP_FINNKEY;
        console.log(`fetch/info`, fetchInfo)
        return fetchInfo;
    }

    const fetchData = () => {
        let ticker = props.symbol;
        if (ticker === '') {
            ticker = getTicker();
        }
        let URL = buildURL(ticker);
        fetch(`${URL}`)
            .then((res) => res.json())
            .then(data => {
                // console.log(`peerdata`, data)
                setPeerList(data)
            })
    }

    const getTicker = () => {
        let ticker = localStorage.getItem('ticker');
        return ticker === '' ? 'AAPL' : ticker;
    }

    useEffect(() => {
        if (props.symbol === '') return;
        fetchData();
    }, [props.symbol])


    // console.log(`peerList -- `, peerList)

    return (
        <div className="peerList-container">
            <ul>
                {peerList.map((comp, index) => (
                    <li
                        key={index}
                        value={comp}
                        onClick={e => props.peerClick(e, comp)}
                    >
                        {comp}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Peers
