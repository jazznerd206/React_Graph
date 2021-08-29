import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CreateTrie, SearchTrie, InsertIntoTrie } from './hooks/symbolTrie';
import { SymbolBuilder } from './hooks/symbolBuilder';
import { getGraphData } from './hooks/getGraphData';
import { getNews } from './hooks/GetNews';
import Theme, { themes } from './basics/basic.theme';
import { GlobalStyle } from './basics/global.theme';
import LandingPage from './components/LandingPage/LandingPage';
import Content from './components/Content/Content';
import ThemeSwitch from './components/Switches/ThemeSwitch';
import Attribution from './components/Attribution/Attribution';
import { get } from './utils/fetchAPI'

function App() {

  let _SB = SymbolBuilder();
  let T = CreateTrie(_SB);
  const [ theme, setTheme ] = useState(themes.light);
  const [ loading, setLoading ] = useState(true);
  const [ data, setData ] = useState({});
  const [ symbol, setSymbol ] = useState('');
  const [ query, setQuery ] = useState('');
  const [ indices, setIndices ] = useState([]);
  const [ stories, setStories ] = useState([]);

  const chooseIndex = data => {
    switch(data) {
      case 'x':
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
  }, [symbol]);

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
    setQuery('gainers');
    setTheme(themes.dark);
    let i = 0;
    for (i; i < _SB.length; ++i) {
      InsertIntoTrie(T, _SB[i]);
    }
    getGraphData().then(data => setIndices(data));
    getNews().then(data => setStories(data));
    setLoading(false)
  }, [loading])

  if (loading === false && data === {}) {
    return <div>Loading...</div>;
  } else {
    return (
      <Router>
        <Attribution />
        <Theme 
          theme={theme} 
          className="App"
        >
          <GlobalStyle 
            theme={theme}
          />
          <ThemeSwitch 
            switch={switchTheme} 
            theme={theme}
          />
          <LandingPage 
            theme={theme} 
            query={query} 
            chooseIndex={chooseIndex} 
          />
          <Content 
            stories={stories}
            indices={indices}
            symbol={symbol}
            data={data}
            loading={loading}
            trie={T}
            onClick={onClick}
            peerClick={peerClick}
            insert={InsertIntoTrie} 
            search={SearchTrie}
            id="stocker"
          />
        </Theme>
      </Router>
    );
  }
}

export default App;