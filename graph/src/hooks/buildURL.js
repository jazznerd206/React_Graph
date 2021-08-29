export const buildURL = (symbol, type, key) => {
    key = key === 'FMP' ? '?apikey=' + process.env.REACT_APP_FMPKEY : '&token=' + process.env.REACT_APP_FINNKEY;
    switch(type) {
        case 'market':
            type = 'https://financialmodelingprep.com/api/v3/market-hours';
            break;
        case 'list':
            type = 'https://financialmodelingprep.com/api/v3/stock/list';
            break;
        case 'FMPquote':
            type = 'https://financialmodelingprep.com/api/v3/quote/';
            type += symbol
            break;
        case 'FMPprofile':
            type = 'https://financialmodelingprep.com/api/v3/profile/';
            type += symbol
            break;
        case 'graphData':
            type = 'https://financialmodelingprep.com/api/v3/historical-price-full/'
            type += symbol;
            break;
        case 'gainers':
            type = 'https://financialmodelingprep.com/api/v3/gainers';
            break;
        case 'losers':
            type = 'https://financialmodelingprep.com/api/v3/losers';
            break;
        case 'x':
            type = 'https://financialmodelingprep.com/api/v3/quotes/index';
            break;
        case 'builder':
            type = 'https://financialmodelingprep.com/api/v3/stock/list'
            break;
        default:
            return;
            
    }
    return type.concat(key);
}