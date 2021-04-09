import React from 'react';
import Peers from './sub/Peers';
import MarketNews from './sub/Marketnews';
import BuyHold from './sub/BuyHold';
import Hilo from './sub/Hilo';


function Financials(props) {

    return (
        <div className="row">
            <div className="box">
                <Peers symbol={props.symbol} peerClick={props.peerClick} />
            </div>
            <div className="box">
                <MarketNews symbol={props.symbol} />
            </div>
            <div className="box">
                box three
            </div>
            <div className="box">
                <Hilo symbol={props.symbol} />
            </div>
        </div>
    )
}

export default Financials
