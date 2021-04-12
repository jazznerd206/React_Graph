import React, { useState, useEffect } from 'react';
import './App.css';
import './media.css';
import Ticker from './components/Ticker/Ticker';
import Input from './components/Input/Input';
import { CreateTrie, SearchTrie } from './hooks/symbolTrie';

function App() {

  const trie = CreateTrie();
  const [data, setData] = useState({});
  const [symbol, setSymbol] = useState('');

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
  }, [symbol])

  const onClick = (e, value) => {
    e.preventDefault();
    localStorage.setItem('ticker', value);
    setSymbol(value);
  }

  const peerClick = (e, value) => {
    e.preventDefault();
    setSymbol(value);
  }

  return (
    <div className="App">
      <Input onClick={onClick} trie={trie} onSearch={SearchTrie}/>
      <Ticker data={data} peerClick={peerClick} />
    </div>
  );
}

export default App;
