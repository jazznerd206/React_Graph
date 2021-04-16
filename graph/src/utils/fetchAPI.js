import { buildURL } from '../hooks/buildURL';

export const get = async (symbol) => {
    let newState = {};
    await fetch(buildURL(symbol, 'FMPprofile', 'FMP'))
        .then((res) => res.json())
        .then(data => newState.FMPdata = data[0]);
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