import React from 'react';
import Peers from './sub/Peers';
import MarketNews from './sub/Marketnews';
import BuyHold from './sub/BuyHold';


function Financials(props) {

    return (
        <div className="row reverse">
            <div className="box">
                <Peers symbol={props.symbol} peerClick={props.peerClick} />
            </div>
            <div className="box">
                <MarketNews symbol={props.symbol} />
            </div>
            <div className="box">
                <BuyHold symbol={props.symbol}/>
            </div>
        </div>
    )
}

export default Financials
