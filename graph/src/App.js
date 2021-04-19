import React, { useState, useEffect } from 'react';
import './App.css';
import './media.css';
import Ticker from './components/Ticker/Ticker';
import Input from './components/Input/Input';
import { CreateTrie, SearchTrie, InsertIntoTrie } from './hooks/symbolTrie';
// import { CreateBand } from './hooks/bands';
import { get } from './utils/fetchAPI'

function App() {

  // let B = CreateBand();
  let T = CreateTrie();
  const [ loading, setLoading ] = useState(true);
  const [ data, setData ] = useState({});
  const [ symbol, setSymbol ] = useState('');

  const retrieveSymbol = () => {
    let symbol = localStorage.getItem('ticker');
    return symbol === null ? 'AAPL' : symbol;
  }

  useEffect(() => {
      const f = async () => {
        if (symbol === '') setSymbol(retrieveSymbol());
        let temp = await get(symbol);
        let result = !Object.values(temp).every(o => o === null);
        if (result && symbol !== '') {
          setData(temp);
          setLoading(false);
        }
      }
      f();
  }, [symbol, loading]);

  const onClick = (e, value) => {
    e.preventDefault();
    localStorage.setItem('ticker', value);
    setSymbol(value);
  }

  const peerClick = (e, value) => {
    e.preventDefault();
    // INSERT INTO TREE AFTER NULL CHECK
    setSymbol(value);
  }

  return (
    <div className="App">
      <Input onClick={onClick} trie={T} insert={InsertIntoTrie} onSearch={SearchTrie}/>
      <Ticker loading={loading} data={data} peerClick={peerClick} />
      <p className="data-attr">Data provided by 
        <a href="https://financialmodelingprep.com/developer/docs/" target="_blank" rel="noreferrer">
          financial modeling prep
        </a>
      </p>
    </div>
  );
}

export default App;




