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
  const [ list, setList ] = useState();
  const [ symbol, setSymbol ] = useState('');

  const fetchURL = async s => {
    let URL = await buildURL(s, 'profile', 'FINN');
    fetch(URL)
      .then((res) => res.json())
      .then(data => {
        setData(data);
      })
  }

  const retrieveSymbol = () => {
    let symbol = localStorage.getItem('ticker');
    return symbol === '' ? 'AAPL' : symbol;
  }

  useEffect(() => {
    if (symbol === '') setSymbol(retrieveSymbol());
    fetchURL(symbol);
  }, [symbol]);

  useEffect(() => {
    const fetchURL = () => {
      let URL = 'https://financialmodelingprep.com/api/v3/stock/list?apikey=';
      URL += process.env.FMPKEY;
      fetch(`${URL}`)
        .then((res) => res.json())
        .then(data => {
          console.log(`data`, data[0])
          data[0].forEach(el => {
            setList(list => [...list, data.symbol])
          })
        })
    fetchURL();
    }
  }, [])

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
      <Input onClick={onClick} trie={T} insert={InsertIntoTrie} onSearch={SearchTrie}/>
      <Ticker data={data} peerClick={peerClick} />
    </div>
  );
}

export default App;
