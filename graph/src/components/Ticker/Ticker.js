import React from 'react';
import './styles.css';
import Daily from './sub/Daily';
import Main from './sub/Main';
import Financials from './sub/Financials';

function Ticker(props) {
    return (
        <div className="ticker-container">
            <Daily symbol={props.data.ticker}/>
            <Main data={props.data} />
            <Financials />
        </div>
    )
}

export default Ticker;
