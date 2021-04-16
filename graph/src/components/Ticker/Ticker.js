import React from 'react';
import { motion } from 'framer-motion';
import './styles.css';
import Daily from './sub/Daily';
import Main from './sub/Main';
import Financials from './sub/financials/Financials';

function Ticker(props) {

    console.log('ticker')

    if (props.data.FMPdata === undefined) {
        return(
            <h1>loading</h1>
        )
    }

    return (
        <div className="ticker-container">
            <Daily 
                data={props.data}
                symbol={props.data.FMPdata.symbol} 
            />
            <Main
                data={props.data} 
            />
            <Financials 
                symbol={props.data.FMPdata.symbol} 
                peerClick={props.peerClick} 
            />
        </div>
    )
}

export default Ticker;
