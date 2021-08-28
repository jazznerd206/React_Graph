import React from 'react';
import MainTable from './tables/MainTable'

function Main(props) {

    let d = props.data;
    let data = [
        d.FMPdata.mktCap,
        d.FMPquote.sharesOutstanding,
        d.FMPquote.yearHigh,
        d.FMPquote.yearLow,
        d.FMPquote.priceAvg50,
        d.FMPdata.volAvg,
        d.FMPquote.eps,
        d.FMPquote.pe,
        d.FMPdata.lastDiv
    ]
    
    return (
        <div className="main-handle">
            <div className="row">
                <h1 className="gradient-text">{props.data.FMPdata.companyName}</h1>
            </div>
            <div className="row spacer">
                <div className="box logo-box">
                    <div className="row logo">
                        <a href={props.data.FMPdata.website} rel="noreferrer" target="_blank">
                            <img src={props.data.FMPdata.image} alt="company-logo"></img>
                        </a>
                    </div>
                    <div className="row address">
                        <span>{props.data.FMPdata.city}, {props.data.FMPdata.state.substring(0,2)}, {props.data.FMPdata.country}</span>
                    </div>
                    <div className="row exchange">
                        <span>{props.data.FMPdata.exchangeShortName}</span>
                    </div>
                    <div className="row sector">
                        <span>{props.data.FMPdata.industry}</span>
                    </div>
                </div>
                <div className="box profile">
                    <div className="row">
                        {props.data.FMPdata === undefined ? null :
                            <span>{props.data.FMPdata.description}</span>
                        }
                    </div>
                </div>
                <div className="box company-health">
                    <div className="row">
                        <MainTable data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;