import React, { useState, useEffect, cloneElement } from 'react';
import './App.css';
import './media.css';
import Ticker from './components/Ticker/Ticker';
import Input from './components/Input/Input';
import { CreateTrie, SearchTrie, InsertIntoTrie } from './hooks/symbolTrie';
import { CreateBand } from './hooks/bands';
import { buildURL } from './hooks/buildURL';
import axios from 'axios';

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




