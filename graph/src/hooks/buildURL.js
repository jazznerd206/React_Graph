const bURL = (type, key, date) => {
    let K = key === 'FMP' ? process.env.FMPKEY : process.env.FINNKEY;
    switch(type) {
        case 'profile':
            type = "https://finnhub.io/api/v1/stock/profile2?symbol="
            break;
        case 'quote':
            type = "https://finnhub.io/api/v1/quote?symbol="
            break;
        case 'news':
            type = "https://finnhub.io/api/v1/company-news?symbol="
            break;
        case 'metrics':
            type = "https://finnhub.io/api/v1/stock/metric?symbol=";
            break;
        case 'market':
            type = 'https://financialmodelingprep.com/api/v3/market-hours?apikey=';
            break;
        default:
          // code block
    }


    console.log(`type, K, date`, type, K, date)
    return type, K, date;
}

export default bURL;