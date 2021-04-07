import React from 'react';
import './styles.css';

function Ticker() {
    return (
        <div className="ticker-container">
            <div className="row">
                <div className="box">
                    current price
                </div>
                <div className="box">
                    delta
                </div>
                <div className="box">
                    daily info
                </div>
            </div>
            <div className="row">
                <div className="box">
                    <h1>GME</h1>
                </div>
                <div className="box">
                    current position
                </div>
            </div>
            <div className="row">
                <div className="box">
                    box one
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
        </div>
    )
}

export default Ticker;
