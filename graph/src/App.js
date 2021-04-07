import { useState, useEffect, cloneElement } from 'react';
import './App.css';
import Ticker from './components/Ticker/Ticker';
import Input from './components/Input/Input';

function App() {

  const [ data, setData ] = useState({});
  const [ symbol, setSymbol ] = useState('');

  
  const buildURL = (ticker) => {
    let fetchInfo = "https://finnhub.io/api/v1/stock/profile2?symbol=";
    fetchInfo += ticker;
    fetchInfo += "&token=c1mts1a37fktjjdr6ji0";
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
    setSymbol(value);
  }

  return (
    <div className="App">
      <Input onClick={onClick}/>
      <Ticker data={data}/>
    </div>
  );
}

export default App;
