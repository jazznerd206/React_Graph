import React from 'react';
import './styles.css';
import Daily from './sub/Daily';
import Main from './sub/Main';
import Financials from './sub/financials/Financials';

function Ticker(props) {
    console.log(`props FROM TICKER.JS`, props)
    return (
        <div className="ticker-container">
            <Daily symbol={props.data.ticker} />
            <Main data={props.data} />
            <Financials symbol={props.data.ticker} peerClick={props.peerClick} />
        </div>
    )
}

export default Ticker;
