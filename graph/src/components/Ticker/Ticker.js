import React from 'react';
import './styles.css';
import Daily from './sub/Daily';
import Main from './sub/Main';
import Financials from './sub/financials/Financials';
import rocket from '../../images/rocket.gif';

function Ticker(props) {

    if (props.data.FMPdata === undefined) {
        return(
            <>
             <h1>loading</h1>
             <img src={rocket} alt="rocket-loader" height="400" width="400" style={{margin: '0 auto'}}/>
            </>
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
