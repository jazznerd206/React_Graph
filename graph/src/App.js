import React, { useState, useEffect } from 'react';
import './App.css';
import './media.css';
import Ticker from './components/Ticker/Ticker';
import Input from './components/Input/Input';
import { CreateTrie, SearchTrie } from './hooks/symbolTrie';

function App() {

  let T;
  const [ data, setData ] = useState({});
  const [ symbol, setSymbol ] = useState('');

  const buildURL = (ticker) => {
    let fetchInfo = "https://finnhub.io/api/v1/stock/profile2?symbol=";
    fetchInfo += ticker;
    fetchInfo += "&token=";
    fetchInfo += process.env.REACT_APP_FINNKEY;
    return fetchInfo;
  }

  const fetchURL = () => {
    let URL = buildURL(symbol);
    fetch(`${URL}`)
      .then((res) => res.json())
      .then(data => {
        setData(data)
      })
  }

  const retrieveSymbol = () => {
    let symbol = localStorage.getItem('ticker');
    return symbol === '' ? 'AAPL' : symbol;
  }

  useEffect(() => {
    if (symbol === '') setSymbol(retrieveSymbol());
    fetchURL();
  }, [symbol]);

  useEffect(() => {
    let symbolList = [];
    let fetchInfo = "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=";
    fetchInfo += process.env.REACT_APP_FINNKEY;
    fetch(`${fetchInfo}`)
      .then((res) => res.json())
      .then(data => {
        data.forEach((element) => {
          symbolList.push(element.displaySymbol);
          // setSymbolList(symbolList => [...symbolList, element.displaySymbol]);
        })
      })
    T = CreateTrie(symbolList);
    console.log(T)
  }, []);

  const onClick = (e, value) => {
    e.preventDefault();
    localStorage.setItem('ticker', value);
    setSymbol(value);
  }

  const peerClick = (e, value) => {
    e.preventDefault();
    setSymbol(value);
  }
  
  // console.log(symbolList);

  return (
    <div className="App">
      <Input onClick={onClick} trie={T} onSearch={SearchTrie}/>
      <Ticker data={data} peerClick={peerClick} />
    </div>
  );
}

export default App;
