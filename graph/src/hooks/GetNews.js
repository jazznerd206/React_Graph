import { useState, useEffect } from 'react'

export const getNews = async symbol => {

    let newState = [];

    let url = 'https://financialmodelingprep.com/api/v3/stock_news?limit=50&apikey='
    url += process.env.REACT_APP_FMPKEY;

    await fetch(url).then(res => res.json()).then(data => newState = data);

    return newState;
}