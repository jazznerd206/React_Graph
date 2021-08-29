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

export const setGraphData = async (symbol, length) => {
    console.log(`length`, length)
    console.log(`symbol`, symbol);
    let newState = {
        symbol: '',
        hist: {}
    };
    newState.symbol = symbol;
    let temp = [];
    let base = 'https://financialmodelingprep.com/api/v3/historical-price-full/';
    base += symbol;
    base += `?apikey=${process.env.REACT_APP_FMPKEY}`;
    await fetch(base).then(res => res.json()).then(data => temp = data);
    for (let i = 0; i < length; ++i) {
        // console.log(`temp.historical`, temp.historical[i])
        let obj = temp.historical[i];
        newState.hist[obj.date] = obj.open;
    }
    return newState;
}