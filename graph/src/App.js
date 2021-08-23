import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import { CreateTrie, SearchTrie, InsertIntoTrie } from './hooks/symbolTrie';
import { get } from './utils/fetchAPI'
import Theme, { themes } from './basics/basic.theme';
import { GlobalStyle } from './basics/global.theme';
import ThemeSwitch from './components/Switches/ThemeSwitch';
import Attribution from './components/Attribution/Attribution';
import Content from './components/Content/Content';
import './App.css';
import './media.css';

function App() {

  let T = CreateTrie();
  const [ loading, setLoading ] = useState(true);
  const [ data, setData ] = useState({});
  const [ symbol, setSymbol ] = useState('');
  const [ theme, setTheme ] = useState(themes.light);
  const [ query, setQuery ] = useState('');

  const chooseIndex = data => {
    switch(data) {
      case 'index':
        console.log(`data`, data);
        setQuery(data);
        break;
      case 'gainers':
        console.log(`data`, data);
        setQuery(data);
        break;
      case 'losers':
        console.log(`data`, data);
        setQuery(data);
        break;
      case 'new':
        console.log(`data`, data);
        setQuery(data);
        break;
      default:
        break;
    }
  }

  const switchTheme = data => {
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

  // useEffect(() => {
  //     const f = async () => {
  //       if (symbol === '') setSymbol(retrieveSymbol());
  //       let temp = await get(symbol);
  //       let result = !Object.values(temp).every(o => o === null);
  //       if (result && symbol !== '') {
  //         setData(temp);
  //         setLoading(false);
  //       }
  //     }
  //     f();
  // }, [symbol, loading]);

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
    setQuery('Indices');
    setTheme(themes.dark);
  }, [])

  return (
    <Router>
      <Attribution />
      <Theme theme={theme} className="App">
        <GlobalStyle theme={theme}/>
        <ThemeSwitch switch={switchTheme} theme={theme}/>
        <LandingPage theme={theme} query={query} chooseIndex={chooseIndex} />
        <Content 
          data={data}
          laoding={loading}
          trie={T}
          onClick={onClick}
          peerClick={peerClick}
          insert={InsertIntoTrie} 
          onSearch={SearchTrie} 
          id="stocker"
        />
      </Theme>
    </Router>
  );
}

export default App;




<a href='https://pngtree.com/so/Blue'>Blue png from pngtree.com/</a>