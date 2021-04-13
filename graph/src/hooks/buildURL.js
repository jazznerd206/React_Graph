import { ohShitWhatUpItsDatDate } from './getDate'

export const buildURL = (symbol, type, key) => {
    key = key === 'FMP' ? '&apikey=' + process.env.REACT_APP_FMPKEY : '&token=' + process.env.REACT_APP_FINNKEY;
    switch(type) {
        case 'profile':
            type = "https://finnhub.io/api/v1/stock/profile2?symbol="
            type += symbol;
            break;
        case 'quote':
            type = "https://finnhub.io/api/v1/quote?symbol="
            type += symbol;
            break;
        case 'news':
            let dates = ohShitWhatUpItsDatDate();
            type = "https://finnhub.io/api/v1/company-news?symbol="
            type += symbol;
            type += "&from" + dates[1];
            type += "&to" + dates[0];
            break;
        case 'metrics':
            type = "https://finnhub.io/api/v1/stock/metric?symbol=";
            type += symbol;
            break;
        case 'reco':
            type = "https://finnhub.io/api/v1/stock/recommendation?symbol=";
            type += symbol;
            break;
        case 'peers':
            type = "https://finnhub.io/api/v1/stock/peers?symbol=";
            type += symbol;
            break;
        case 'market':
            type = 'https://financialmodelingprep.com/api/v3/market-hours';
            break;
        case 'list':
            type = 'https://financialmodelingprep.com/api/v3/stock/list';
            break;
        default:
            return;
    }
    console.log(`key`, type.concat(key));
    return type.concat(key);
}