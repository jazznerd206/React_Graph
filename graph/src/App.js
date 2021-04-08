import React, { useState, useEffect } from 'react';
import './App.css';
import Ticker from './components/Ticker/Ticker';
import Input from './components/Input/Input';

function App() {

  const [data, setData] = useState({});
  const [symbol, setSymbol] = useState('');


  // console.log(`process.env.FINNKEY`, process.env.REACT_APP_FINNKEY)
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
        // console.log(`data`, data)
        setData(data)
      })
  }

  useEffect(() => {
    if (symbol === '') return;
    fetchURL();
  }, [symbol])

  const onClick = (e, value) => {
    e.preventDefault();
    localStorage.setItem('ticker', value);
    setSymbol(value);
  }

  const peerClick = (e, value) => {
    e.preventDefault();
    console.log(`value FROM app,js`, value)
    setSymbol(value);
  }

  return (
    <div className="App">
      <Input onClick={onClick} />
      <Ticker data={data} peerClick={peerClick} />
    </div>
  );
}

export default App;
