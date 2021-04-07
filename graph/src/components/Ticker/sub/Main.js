import React from 'react'

function Main(props) {
    // console.log(props.data);
    return (
        <div className="row">
            <div className="box">
                <img src={props.data.logo}></img>
            </div>
            <div className="box">
                <h1>{props.data.name}</h1>
                <p>Ticker: {props.data.ticker}</p>
                <p>Exchange: {props.data.exchange}</p>
                <p>Sector: {props.data.finnhubIndustry}</p>
            </div>
            <div className="box">
                <p>Market Cap: {props.data.marketCapitalization}</p>
                <p>Shares Outstanding: {props.data.shareOutstanding}</p>
            </div>
        </div>
    )
}

export default Main
