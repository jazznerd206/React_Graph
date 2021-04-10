import React from 'react';
import { motion } from 'framer-motion';
import './styles.css';
import Daily from './sub/Daily';
import Main from './sub/Main';
import Financials from './sub/financials/Financials';

function Ticker(props) {

    return (
        <div className="ticker-container">
            <Main 
                data={props.data} 
                exchange={props.data.exchange === '' ? 'No data' : props.data.exchange}
            />
            <Daily 
                symbol={props.data.ticker} 
            />
            <Financials 
                symbol={props.data.ticker} 
                peerClick={props.peerClick} 
            />
        </div>
    )
}

export default Ticker;
