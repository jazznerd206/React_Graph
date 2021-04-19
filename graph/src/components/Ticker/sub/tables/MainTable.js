import React from 'react';
import NumericLabel from 'react-pretty-numbers'

function mainTable(props) {
    
    let numbers = {
        justification: 'L',
        locales : 'en-US',
        currency: false,
        percentage: false,
        precision: 2,
        commafy: false,
        shortFormat: true,
        shortFormatMinValue: 100000,
        shortFormatPrecision: 2,
    };
    let money = {
        justification: 'L',
        locales : 'en-US',
        currency: true,
        currencyFormat: 'USD',
        commafy: true,
        shortFormat: true,
        shortFormatMinValue: 10000,
        shortFormatPrecision: 1,
    };
    
    let d = props.data;

    return (
        <div className="sibling-fade">
            <div className="table-row">
                <p>
                    Market Cap
                </p>
                <span>
                    <NumericLabel params={numbers}>{d[0]}</NumericLabel>
                </span>
            </div>
            <div className="table-row">
                <p>
                    Shits Outstanding
                </p>
                <span>
                    <NumericLabel params={numbers}>{d[1]}</NumericLabel>
                </span>
            </div>
            <div className="table-row">
                <p>
                    52wk High
                </p>
                <span>
                    <NumericLabel params={money}>{d[2]}</NumericLabel>
                </span>
            </div>
            <div className="table-row">
                <p>
                    52wk Low
                </p>
                <span>
                    <NumericLabel params={money}>{d[3]}</NumericLabel>
                </span>
            </div>
            <div className="table-row">
                <p>
                    50 day Avg
                </p>
                <span>
                    <NumericLabel params={money}>{d[4]}</NumericLabel>
                </span>
            </div>
            <div className="table-row">
                <p>
                    Avg Daily Vol
                </p>
                <span>
                    <NumericLabel params={numbers}>{d[5]}</NumericLabel>
                </span>
            </div>
            <div className="table-row">
                <p>
                    EPS
                </p>
                <span>
                    <NumericLabel params={money}>{d[6]}</NumericLabel>
                </span>
            </div>
            <div className="table-row">
                <p>
                    P/E Ratio
                </p>
                <span>
                    <NumericLabel params={numbers}>{d[6]}</NumericLabel>
                </span>
            </div>
            <div className="table-row">
                <p>
                    Last Dividend
                </p>
                <span>
                    <NumericLabel params={money}>{d[6]}</NumericLabel>
                </span>
            </div>
        </div>
    )
}

export default mainTable
