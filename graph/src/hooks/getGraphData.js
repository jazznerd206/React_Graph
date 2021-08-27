import { useState, useEffect } from 'react'

export const getGraphData = async symbol => {

    let newState = [];
    let temp = [];
    let base = 'https://financialmodelingprep.com/api/v3/';
    let first = `symbol/available-indexes?apikey=${process.env.REACT_APP_FMPKEY}`;
    await fetch(base + first).then(res => res.json()).then(data => temp = data);
    for (let i = 0; i < temp.length; ++i) {
        let neo = {
            index: i,
            symbol: temp[i].symbol,
            name: temp[i].name,
            stockExchange: temp[i].stockExchange,
        }
        newState.push(neo);
    }
    return newState;
}


export const setGraphData = async symbol => {
    let newState = {};
    let temp = [];
    let base = 'https://financialmodelingprep.com/api/v3/historical-price-full/';
    base += symbol;
    base += `?apikey=${process.env.REACT_APP_FMPKEY}`;
    await fetch(base).then(res => res.json()).then(data => temp = data);
    console.log(`temp`, temp)
    for (let i = 0; i < temp.historical.length; ++i) {
        let obj = temp.historical[i];
        // const neo = {
        //     date: obj.date,
        //     open: obj.open
        // }
        // newState.push(neo);
        newState[obj.date] = obj.open;
    }
    return newState;
}