(this.webpackJsonpgraph=this.webpackJsonpgraph||[]).push([[0],[,,,,function(e,t,c){},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(5),a=c.n(r),i=c(2),o=(c(10),c(11),c(12),c(0));var j=function(e){var t=Object(n.useState)(),c=Object(i.a)(t,2),s=c[0],r=c[1],a=Object(n.useState)(),j=Object(i.a)(a,2),l=j[0],b=j[1],d=Object(n.useState)({}),h=Object(i.a)(d,2),u=h[0],O=h[1],x=Object(n.useState)(!1),f=Object(i.a)(x,2),m=f[0],v=f[1],p=new WebSocket("wss://ws.finnhub.io?token=".concat("c1mts1a37fktjjdr6ji0")),g=localStorage.getItem("ticker");""===g&&(g=e.symbol);try{p.addEventListener("open",(function(e){p.send(JSON.stringify({type:"subscribe",symbol:g}))}))}catch(k){console.log("error",k)}p.addEventListener("message",(function(e){var t=JSON.parse(e.data);Array.isArray(t.data)&&(console.log("data",t.data[0].p.toFixed(2),t.data[0].v),r(t.data[0].p.toFixed(2)),b(t.data[0].v))}));var y=function(){fetch("".concat("https://financialmodelingprep.com/api/v3/market-hours?apikey=fe052be73f5dbfe3e882f17c1fad13bb")).then((function(e){return e.json()})).then((function(e){console.log("data",e),v(e.isTheStockMarketOpen)}))};return Object(n.useEffect)((function(){!function(){var t=function(e){var t="https://finnhub.io/api/v1/quote?symbol=";return t+=e,(t+="&token=")+"c1mts1a37fktjjdr6ji0"}(e.symbol);fetch("".concat(t)).then((function(e){return e.json()})).then((function(e){y(),O(e)}))}()}),[e.symbol]),Object(o.jsxs)("div",{className:"row",children:[console.log("open: "+m),!0!==m&&Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"get a life,"}),Object(o.jsx)("h1",{children:"markets are closed."})]}),!0===m&&Object(o.jsxs)("div",{className:"box current",children:[Object(o.jsx)("p",{children:s}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("p",{children:"vol"}),Object(o.jsx)("span",{children:l})]})]}),Object(o.jsxs)("div",{className:"box historical",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("p",{children:"last close"}),Object(o.jsx)("span",{children:u.pc})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("p",{children:"open"}),Object(o.jsx)("span",{children:u.o})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("p",{children:"close"}),Object(o.jsx)("span",{children:u.c})]})]}),Object(o.jsxs)("div",{className:"box hi-lo",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("p",{children:"hi"}),Object(o.jsx)("span",{children:u.h})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("p",{children:"lo"}),Object(o.jsx)("span",{children:u.l})]})]})]})};var l=function(e){var t=void 0===e.data.exchange?"AAPL":e.data.exchange,c="NEW"===t.substr(0,t.indexOf(" "))?"NYSE":t.substr(0,t.indexOf(" "));return Object(o.jsxs)("div",{className:"main-handle",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("h1",{children:e.data.name})}),Object(o.jsxs)("div",{className:"row spacer",children:[Object(o.jsx)("div",{className:"box",children:Object(o.jsx)("img",{src:e.data.logo})}),Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("div",{className:"row ticker",children:Object(o.jsx)("span",{children:e.data.ticker})}),Object(o.jsx)("div",{className:"row exchange",children:Object(o.jsx)("span",{children:c})}),Object(o.jsx)("div",{className:"row sector",children:Object(o.jsx)("span",{children:e.data.finnhubIndustry})})]})]})]})};c(4);var b=function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),s=c[0],r=c[1],a=function(){var e=localStorage.getItem("ticker");return""===e?"AAPL":e};return Object(n.useEffect)((function(){!function(){var t=e.symbol;""===t&&(t=a());var c=function(e){var t="https://finnhub.io/api/v1/stock/peers?symbol=";return t+=e,(t+="&token=")+"c1mts1a37fktjjdr6ji0"}(t);fetch("".concat(c)).then((function(e){return e.json()})).then((function(e){r(e)}))}()}),[e.symbol]),Object(o.jsxs)("div",{className:"peerList-container",children:[Object(o.jsx)("h1",{children:"market equivalents"}),Object(o.jsx)("ul",{children:s.map((function(t,c){return Object(o.jsx)("li",{value:t,onClick:function(c){return e.peerClick(c,t)},children:t},c)}))})]})};var d=function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),s=c[0],r=c[1],a=function(e){var t=function(){var e=new Date,t=e.getFullYear().toString(),c=e.getMonth().toString(),n=e.getDay().toString();c.length<2&&(c="0"+c),n.length<2&&(n="0"+n),new Date(e.getMonth()-1);var s=e.getFullYear().toString(),r=e.getMonth().toString(),a=e.getDay().toString();return r.length<2&&(r="0"+r),a.length<2&&(a="0"+a),[t+"-"+c+"-"+n,s+"-"+r+"-"+a]}(),c="https://finnhub.io/api/v1/company-news?symbol=";return c+=e,c+="&from"+t[1],c+="&to"+t[0],c+="&token=",c+="c1mts1a37fktjjdr6ji0"};return Object(n.useEffect)((function(){""!==e.symbol&&function(){var t=a(e.symbol);fetch("".concat(t)).then((function(e){return e.json()})).then((function(e){r(e)}))}()}),[e.symbol]),0===s.length?Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"NO NEWS"})}):Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"news"}),Object(o.jsx)("div",{className:"news-container",id:"style-1",children:s.map((function(e){var t=e.headline;return t.length>50&&(t=t.substr(0,47)+"..."),Object(o.jsx)("div",{className:"article",children:Object(o.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer noopener",children:Object(o.jsx)("p",{children:t})})},e.id)}))})]})};var h=function(e){var t=e.symbol,c=Object(n.useState)({}),s=Object(i.a)(c,2),r=s[0],a=s[1];return Object(n.useEffect)((function(){""!==t&&function(){var e=function(e){var t="https://finnhub.io/api/v1/stock/recommendation?symbol=";return t+=e,(t+="&token=")+"c1mts1a37fktjjdr6ji0"}(t);fetch("".concat(e)).then((function(e){return e.json()})).then((function(e){a(e)}))}()}),[t]),void 0!==r[0]?Object(o.jsxs)("div",{className:"buyHold-container",children:[Object(o.jsx)("h1",{children:"buy/hold"}),Object(o.jsxs)("div",{className:"buy box",children:[Object(o.jsx)("span",{children:r[0].buy}),Object(o.jsx)("p",{children:"BUY"})]}),Object(o.jsxs)("div",{className:"neutral box",children:[Object(o.jsx)("span",{children:r[0].hold}),Object(o.jsx)("p",{children:"HOLD"})]}),Object(o.jsxs)("div",{className:"sell box",children:[Object(o.jsx)("span",{children:r[0].sell}),Object(o.jsx)("p",{children:"SELL"})]})]}):Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"NO DATA"})})};var u=function(e){return Object(o.jsxs)("div",{className:"row reverse",children:[Object(o.jsx)("div",{className:"box",children:Object(o.jsx)(b,{symbol:e.symbol,peerClick:e.peerClick})}),Object(o.jsx)("div",{className:"box",children:Object(o.jsx)(d,{symbol:e.symbol})}),Object(o.jsx)("div",{className:"box",children:Object(o.jsx)(h,{symbol:e.symbol})})]})};var O=function(e){return Object(o.jsxs)("div",{className:"ticker-container",children:[Object(o.jsx)(l,{data:e.data,exchange:""===e.data.exchange?"No data":e.data.exchange}),Object(o.jsx)(j,{symbol:e.data.ticker}),Object(o.jsx)(u,{symbol:e.data.ticker,peerClick:e.peerClick})]})};c(14);var x=function(e){var t=Object(n.useState)(""),c=Object(i.a)(t,2),s=c[0],r=c[1];return Object(o.jsx)("div",{className:"symbol-form",children:Object(o.jsxs)("form",{children:[Object(o.jsx)("label",{htmlFor:"symbol",className:"label",children:"Symbol: "}),Object(o.jsx)("input",{className:"",type:"input",name:"symbol",onChange:function(e){return r(e.target.value)}}),Object(o.jsx)("button",{type:"submit",className:"btn btn-success",onClick:function(t){return e.onClick(t,s)},children:"Get quote"})]})})};var f=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),a=Object(i.a)(r,2),j=a[0],l=a[1];return Object(n.useEffect)((function(){console.log("symbol",j),""===j&&l(function(){var e=localStorage.getItem("ticker");return""===e?"AAPL":e}()),function(){var e=function(e){var t="https://finnhub.io/api/v1/stock/profile2?symbol=";return t+=e,(t+="&token=")+"c1mts1a37fktjjdr6ji0"}(j);fetch("".concat(e)).then((function(e){return e.json()})).then((function(e){s(e)}))}()}),[j]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(x,{onClick:function(e,t){e.preventDefault(),localStorage.setItem("ticker",t),l(t)}}),Object(o.jsx)(O,{data:c,peerClick:function(e,t){e.preventDefault(),l(t)}})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),m()}],[[15,1,2]]]);
//# sourceMappingURL=main.e95c4500.chunk.js.map