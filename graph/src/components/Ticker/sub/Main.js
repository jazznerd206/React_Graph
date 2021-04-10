import React from 'react'

function Main(props) {

    let x = props.data.exchange;
    let exc = '';
    if (x !== '') {
        exc = 'Awaiting ';
    }
    exc = x.substr(0, x.indexOf(' ')) === 'NEW' ? 'NYSE' : x.substr(0, x.indexOf(' '));
    
    return (
        <div className="main-handle">
            <div className="row">
                <h1>{props.data.name}</h1>
            </div>
            <div className="row spacer">
                <div className="box">
                    <img src={props.data.logo}></img>
                </div>
                <div className="box">
                    <div className="row ticker">
                        <span>{props.data.ticker}</span>
                    </div>
                    <div className="row exchange">
                        <span>{exc}</span>
                    </div>
                    <div className="row sector">
                        <span>{props.data.finnhubIndustry}</span>
                    </div>
                </div>
                {/* <div className="box">
                    <div className="row">
                        <p>market cap</p>
                        <span>{props.data.marketCapitalization}</span>
                    </div>
                    <div className="row">
                        <p>shares outstanding</p>
                        <span>{props.data.shareOutstanding}</span>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Main
