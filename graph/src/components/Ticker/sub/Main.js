import React from 'react'

function Main(props) {
    // console.log(props.data);
    const exchange = () => {
        if (props.data.exchange.substr(0,props.data.exchange.indexOf(' ')) === 'NEW') return 'NYSE'
        else return props.data.exchange.substr(0,props.data.exchange.indexOf(' '));
    }
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
                    <div className="row sector">
                        <span>{props.data.finnhubIndustry}</span>
                    </div>
                    <div className="row exchange">
                        <span>{exchange}</span>
                    </div>
                </div>
                <div className="box">
                    <div className="row">
                        <p>market cap</p>
                        <span>{props.data.marketCapitalization}</span>
                    </div>
                    <div className="row">
                        <p>shares</p>
                        <span>{props.data.shareOutstanding}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
