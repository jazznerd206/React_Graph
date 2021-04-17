import React, { useState, useEffect, cloneElement } from 'react';
import './App.css';
import './media.css';
import Ticker from './components/Ticker/Ticker';
import Input from './components/Input/Input';
import { CreateTrie, SearchTrie, InsertIntoTrie } from './hooks/symbolTrie';
import { CreateBand } from './hooks/bands';
import { get } from './utils/fetchAPI'
// import axios from 'axios';
// import { buildURL } from './hooks/buildURL';

function App() {

  console.log('app')

  let B = CreateBand();
  let T = CreateTrie();
  const [ loading, setLoading ] = useState(true);
  const [ data, setData ] = useState({});
  const [ symbol, setSymbol ] = useState('');
  // console.log(`localStorage.getItem('andrew')`, localStorage.getItem('andrew'))

  const retrieveSymbol = () => {
    let symbol = localStorage.getItem('ticker');
    console.log(`symbol from retrieve symbol -> \n`, symbol)
    return symbol === null ? 'AAPL' : symbol;
  }

  useEffect(async () => {
      if (symbol === '') setSymbol(retrieveSymbol());
      console.log(`symbol ->`, symbol)
      let temp = await get(symbol);
      console.log(`temp -> \n`, temp)
      let result = !Object.values(temp).every(o => o === null);
      console.log(`result`, result);
      if (result && symbol !== '') {
        setLoading(false);
        // setSymbol(symbol)
        setData(temp);
      }
  }, [symbol]);




  // useEffect(() => {
  //   let newUser = {
  //     name: 'name',
  //     email: 'email',
  //     password: 'password'
  //   }
  //   axios.post('/api/user', newUser)
  //     .then(response => {
  //       console.log(`response.data from finduser promise API ${response.data}`)
  //       if (response.data) {
  //         console.log(response.data._id)
  //         axios.delete(`/user/${response.data._id}`)
  //           .then(response => {
  //             console.log(response);
  //         });
  //       }
  //       else {
  //           console.log('find user error')
  //       }
  //     })
  //     .catch(error => {
  //         console.log(Error('find user server error: ' + JSON.stringify(error)));
  //         return;
  //     })
      
  //   }, [])

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

  // console.log(`data.FMPdata`, data.FMPdata)

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




