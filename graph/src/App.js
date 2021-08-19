import React, { useState, useEffect } from 'react';
import './App.css';
import './media.css';
import LandingPage from './components/LandingPage/LandingPage';
import Input from './components/Input/Input';
import Ticker from './components/Ticker/Ticker';
import { CreateTrie, SearchTrie, InsertIntoTrie } from './hooks/symbolTrie';
import { get } from './utils/fetchAPI'
import Theme, { themes } from './basics/basic.theme';
import { GlobalStyle } from './basics/global.theme';
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch';

function App() {

  let T = CreateTrie();
  const [ loading, setLoading ] = useState(true);
  const [ data, setData ] = useState({});
  const [ symbol, setSymbol ] = useState('');
  const [ theme, setTheme ] = useState(themes.light);

  const switchTheme = (data) => {
    switch(data) {
      case 'light':
        console.log('light');
        setTheme(themes.light);
        break;
      case 'dark':
        setTheme(themes.dark);
        console.log('dark');
        break;
      case 'solar':
        setTheme(themes.solar);
        console.log('solar');
        break;
      case 'jazz':
        setTheme(themes.jazz);
        console.log('jazz');
        break;
      case 'grayscale':
        setTheme(themes.grayscale);
        console.log('grayscale');
        break;
      case 'rainbow':
        setTheme(themes.rainbow);
        console.log('rainbow');
        break;
      case 'golf':
        setTheme(themes.golf);
        console.log('golf');
        break;
      default:
        console.log('null')
        break;
    }
  }

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
    setSymbol(value);
  }

  useEffect(() => {
    setTheme(themes.light);
  }, [])

  return (
    <Theme theme={theme} className="App">
      <GlobalStyle theme={theme}/>
      <ThemeSwitch switch={switchTheme} theme={theme}/>
      <LandingPage theme={theme} />
      <Input onClick={onClick} trie={T} insert={InsertIntoTrie} onSearch={SearchTrie}/>
      <Ticker loading={loading} data={data} peerClick={peerClick} />
      <p className="data-attr">Data provided by 
        <a href="https://financialmodelingprep.com/developer/docs/" target="_blank" rel="noreferrer">
          financial modeling prep
        </a>
      </p>
    </Theme>
  );
}

export default App;




