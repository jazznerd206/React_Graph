import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import symbols from './files/nasdaqtraded.txt';
import reportWebVitals from './reportWebVitals';

// const showFile = async (file) => {
//   // e.preventDefault()
//   const reader = new FileReader()
//   // console.log('EMPTY', reader.readyState); //readyState === 0
//   reader.onload = e => { 
//       console.log(e.target.result);
//   };
//   let f = new File(['blob'], './files/nasdaqtraded.txt', {type: "text/plain;charset=utf-8"});
//   reader.readAsText(f);
//   // console.log(`reader`, reader)
//   reader.onloadend = function () {
//     console.log('DONE', reader.readyState); // readyState === 2
//   };
//   return reader.result;
// }

// let sList = showFile(symbols);





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
