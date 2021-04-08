import React from 'react';
import Peers from './sub/Peers';

function Financials(props) {
    return (
        <div className="row">
            <div className="box">
                <Peers symbol={props.symbol} peerClick={props.peerClick} />
            </div>
            <div className="box">
                box two
            </div>
            <div className="box">
                box three
            </div>
            <div className="box">
                box four
            </div>
        </div>
    )
}

export default Financials