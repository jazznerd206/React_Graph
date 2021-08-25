import { buildURL } from '../hooks/buildURL';

export const get = async (symbol) => {
    let newState = {};
    await fetch(buildURL(symbol, 'FMPprofile', 'FMP'))
        .then((res) => res.json())
        .then(data => newState.FMPdata = data[0]);
    await fetch(buildURL(symbol, 'FMPquote', 'FMP'))
        .then((res) => res.json())
        .then(data => newState.FMPquote = data[0]);
    await fetch(buildURL(symbol, 'profile', 'FINN'))
        .then((res) => res.json())
        .then(data => newState.FINNdata = data)
    await fetch(buildURL(symbol, 'quote', 'FINN'))
        .then((res) => res.json())
        .then(data => newState.FINNquote = data)
    await fetch(buildURL(symbol, 'metrics', 'FINN'))
        .then((res) => res.json())
        .then(data => newState.FINNmetrics = data)
    // console.log(`newState -> \n `, newState)
    return newState;
}

export const ticker = async symbol => {
    let newState = {};
    switch(symbol) {
        case 'gainers':
            await fetch(buildURL(symbol, 'gainers', 'FMP'))
                .then(res => res.json())
                .then(data => {newState.newStocks = data});
            break;
        case 'losers':
            await fetch(buildURL(symbol, 'losers', 'FMP'))
                .then(res => res.json())
                .then(data => {newState.newStocks = data});
            break;
        case 'x':
            await fetch(buildURL(symbol, 'x', 'FMP'))
                .then(res => res.json())
                .then(data => newState.newStocks = data);
            break;
        default:
            break;
    }
    return newState;
}

export const sBuilder = async () => {
    let newState = {};
    await fetch(buildURL(null, 'builder', 'FMP'))
        .then(res => res.json())
        .then(data => newState.data = data);
    return newState;
}

