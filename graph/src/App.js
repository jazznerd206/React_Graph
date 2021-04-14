import React, { useState, useEffect } from 'react';
import './App.css';
import './media.css';
import Ticker from './components/Ticker/Ticker';
import Input from './components/Input/Input';
import { CreateTrie, SearchTrie, InsertIntoTrie } from './hooks/symbolTrie';
import { CreateBand } from './hooks/bands';
import { buildURL } from './hooks/buildURL';

function App() {

  let B = CreateBand();
  let T = CreateTrie();
  const [ data, setData ] = useState({});
  const [ symbol, setSymbol ] = useState('');

  const retrieveSymbol = () => {
    let symbol = localStorage.getItem('ticker');
    return symbol === '' ? 'AAPL' : symbol;
  }

  useEffect(() => {
    if (symbol === '') setSymbol(retrieveSymbol());
    fetch(buildURL(symbol, 'profile', 'FINN'))
      .then((res) => res.json())
      .then(data => {
        setData(data);
      })
    }, [symbol]);

  const onClick = (e, value) => {
    e.preventDefault();
    localStorage.setItem('ticker', value);
    // console.log(`SearchTrie(value)`, SearchTrie(T, value));
    setSymbol(value);
  }

  const peerClick = (e, value) => {
    e.preventDefault();
    setSymbol(value);
  }

  return (
    <div className="App">
      <Input onClick={onClick} trie={T} insert={InsertIntoTrie} onSearch={SearchTrie}/>
      <Ticker data={data} peerClick={peerClick} />
    </div>
  );
}

export default App;
