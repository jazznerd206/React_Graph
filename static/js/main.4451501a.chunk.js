(this.webpackJsonpgraph=this.webpackJsonpgraph||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(10),s=n.n(r),i=n(4),o=n.n(i),l=n(5),j=n(2),d=(n(17),n(18),n(19),n(0));var b=function(e){console.log("props.data",e.data);var t=Object(a.useState)(),n=Object(j.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(),i=Object(j.a)(s,2),o=i[0],l=i[1],b=new WebSocket("wss://ws.finnhub.io?token=".concat("c1mts1a37fktjjdr6ji0")),u=e.symbol;""===u&&(u=localStorage.getItem("ticker"));try{b.addEventListener("open",(function(e){b.send(JSON.stringify({type:"subscribe",symbol:u}))}))}catch(h){console.log("error",h)}return b.addEventListener("message",(function(e){var t=JSON.parse(e.data);Array.isArray(t.data)&&(r(t.data[0].p.toFixed(2)),l(t.data[0].v))})),Object(d.jsx)("div",{className:"current-row",children:Object(d.jsxs)("div",{className:"box current",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("p",{children:"price: "}),Object(d.jsx)("span",{children:c})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("p",{children:"vol: "}),Object(d.jsx)("span",{children:o})]})]})})};var u=function(e){var t=Object(a.useState)(""),n=Object(j.a)(t,2),c=n[0],r=n[1],s=new Date;s.setHours(6,30,0);var i=function(e){return("0"+parseInt(e)).substr(-2)},o=function e(){var t=new Date;t>s&&s.setDate(s.getDate()+1);var n=(s-t)/1e3,a=i(n/60%60),c=i(n%60);r(a+":"+c),setTimeout(e,1e3)};return Object(a.useEffect)((function(){o()}),[]),Object(d.jsx)("div",{className:"row closed",children:Object(d.jsxs)("div",{className:"box current",children:[Object(d.jsx)("span",{children:"Markets open in:"}),Object(d.jsx)("h1",{children:c})]})})};var h=function(e){var t=Object(a.useState)(!1),n=Object(j.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(!1),i=Object(j.a)(s,2),o=i[0],l=i[1];return Object(a.useEffect)((function(){(function(){var e=new Date;if(0===e.getDay()||6===e.getDay())return!1;var t=e.getHours();return!(t<6||t>15)&&(6===t?!(e.getMinutes()<30)||(l(!0),!1):14!==t||e.getMinutes()<30)})()&&r(!0)}),[]),Object(d.jsxs)("div",{className:"row mobile-daily",children:[!0!==c&&Object(d.jsx)(u,{open:c,openAlert:o,data:e.data}),!0===c&&Object(d.jsx)(b,{symbol:e.symbol,data:e.data})]})},f=n(3),p=n.n(f);var O=function(e){var t=e.data;console.log("props.data",e.data);var n={justification:"L",locales:"en-US",currency:!1,percentage:!1,precision:2,commafy:!1,shortFormat:!0,shortFormatMinValue:1e5,shortFormatPrecision:2},a={justification:"L",locales:"en-US",currency:!0,currencyFormat:"USD",commafy:!0,shortFormat:!0,shortFormatMinValue:1e4,shortFormatPrecision:1};return Object(d.jsxs)("div",{className:"sibling-fade",children:[Object(d.jsxs)("div",{className:"table-row",children:[Object(d.jsx)("p",{children:"Market Cap"}),Object(d.jsx)("span",{children:Object(d.jsx)(p.a,{params:n,children:t[0]})})]}),Object(d.jsxs)("div",{className:"table-row",children:[Object(d.jsx)("p",{children:"Shits Outstanding"}),Object(d.jsx)("span",{children:Object(d.jsx)(p.a,{params:n,children:t[1]})})]}),Object(d.jsxs)("div",{className:"table-row",children:[Object(d.jsx)("p",{children:"52wk High"}),Object(d.jsx)("span",{children:Object(d.jsx)(p.a,{params:a,children:t[2]})})]}),Object(d.jsxs)("div",{className:"table-row",children:[Object(d.jsx)("p",{children:"52wk Low"}),Object(d.jsx)("span",{children:Object(d.jsx)(p.a,{params:a,children:t[3]})})]}),Object(d.jsxs)("div",{className:"table-row",children:[Object(d.jsx)("p",{children:"50 day Avg"}),Object(d.jsx)("span",{children:Object(d.jsx)(p.a,{params:a,children:t[4]})})]}),Object(d.jsxs)("div",{className:"table-row",children:[Object(d.jsx)("p",{children:"Avg Daily Vol"}),Object(d.jsx)("span",{children:Object(d.jsx)(p.a,{params:n,children:t[5]})})]}),Object(d.jsxs)("div",{className:"table-row",children:[Object(d.jsx)("p",{children:"EPS"}),Object(d.jsx)("span",{children:Object(d.jsx)(p.a,{params:a,children:t[6]})})]}),Object(d.jsxs)("div",{className:"table-row",children:[Object(d.jsx)("p",{children:"P/E Ratio"}),Object(d.jsx)("span",{children:Object(d.jsx)(p.a,{params:n,children:t[6]})})]}),Object(d.jsxs)("div",{className:"table-row",children:[Object(d.jsx)("p",{children:"Last Dividend"}),Object(d.jsx)("span",{children:Object(d.jsx)(p.a,{params:a,children:t[6]})})]})]})};var m=function(e){var t=e.data,n=[t.FMPdata.mktCap,t.FMPquote.sharesOutstanding,t.FMPquote.yearHigh,t.FMPquote.yearLow,t.FMPquote.priceAvg50,t.FMPdata.volAvg,t.FMPquote.eps,t.FMPquote.pe,t.FMPdata.lastDiv];return Object(d.jsxs)("div",{className:"main-handle",children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("h1",{children:e.data.FMPdata.companyName})}),Object(d.jsxs)("div",{className:"row spacer",children:[Object(d.jsxs)("div",{className:"logo-box",children:[Object(d.jsx)("div",{className:"row logo",children:Object(d.jsx)("a",{href:e.data.FMPdata.website,rel:"noreferrer",target:"_blank",children:Object(d.jsx)("img",{src:e.data.FMPdata.image})})}),Object(d.jsx)("div",{className:"row address",children:Object(d.jsxs)("span",{children:[e.data.FMPdata.city,", ",e.data.FMPdata.state.substring(0,2),", ",e.data.FMPdata.country]})}),Object(d.jsx)("div",{className:"row exchange",children:Object(d.jsx)("span",{children:e.data.FMPdata.exchangeShortName})}),Object(d.jsx)("div",{className:"row sector",children:Object(d.jsx)("span",{children:e.data.FMPdata.industry})})]}),Object(d.jsx)("div",{className:"box profile",children:Object(d.jsx)("div",{className:"row",children:void 0===e.data.FMPdata?null:Object(d.jsx)("span",{children:e.data.FMPdata.description})})}),Object(d.jsx)("div",{className:"box company-health",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)(O,{data:n})})})]})]})},x=function(e,t,n){switch(n="FMP"===n?"?apikey=fe052be73f5dbfe3e882f17c1fad13bb":"&token=c1mts1a37fktjjdr6ji0",t){case"profile":t="https://finnhub.io/api/v1/stock/profile2?symbol=",t+=e;break;case"quote":t="https://finnhub.io/api/v1/quote?symbol=",t+=e;break;case"news":var a=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),a=e.getDay();n.length<2&&(n="0"+n),a.length<2&&(a="0"+a);var c=e,r=c.getFullYear(),s=c.getMonth()-1,i=c.getDay();return s.length<2&&(s="0"+s),i.length<2&&(i="0"+i),[t+"-"+n+"-"+a,r+"-"+s+"-"+i]}();t="https://finnhub.io/api/v1/company-news?symbol=",t+=e,t+="&from"+a[1],t+="&to"+a[0];break;case"metrics":t="https://finnhub.io/api/v1/stock/metric?symbol=",t+=e;break;case"reco":t="https://finnhub.io/api/v1/stock/recommendation?symbol=",t+=e;break;case"peers":t="https://finnhub.io/api/v1/stock/peers?symbol=",t+=e;break;case"market":t="https://financialmodelingprep.com/api/v3/market-hours";break;case"list":t="https://financialmodelingprep.com/api/v3/stock/list";break;case"FMPquote":t="https://financialmodelingprep.com/api/v3/quote/",t+=e;break;case"FMPprofile":t="https://financialmodelingprep.com/api/v3/profile/",t+=e;break;default:return}return t.concat(n)};n(8);var v=function(e){var t=e.symbol,n=Object(a.useState)([]),c=Object(j.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){fetch(x(t,"peers","FINN")).then((function(e){return e.json()})).then((function(e){s(e)}))}),[t]),Object(d.jsxs)("div",{className:"peerList-container",children:[Object(d.jsx)("h1",{children:"market equivalents"}),Object(d.jsx)("ul",{children:r.map((function(t,n){return Object(d.jsx)("li",{value:t,onClick:function(n){return e.peerClick(n,t)},children:t},n)}))})]})};var N=function(e){var t=e.symbol,n=Object(a.useState)([]),c=Object(j.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){if(""!==t){fetch(x(t,"news","FINN")).then((function(e){return e.json()})).then((function(e){s(e)}));var e=document.querySelectorAll("h1");e.forEach((function(e){e.classList.add("flash")})),setTimeout((function(){e.forEach((function(e){e.classList.remove("flash")}))}),3e3)}}),[t]),0===r.length?Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"NO NEWS"})}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"news"}),Object(d.jsx)("div",{className:"news-container",id:"style-1",children:r.map((function(e){var t=e.headline;return t.length>50&&(t=t.substr(0,47)+"..."),Object(d.jsx)("div",{className:"article",children:Object(d.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer noopener",children:Object(d.jsx)("p",{children:t})})},e.id)}))})]})};var g=function(e){var t=e.symbol,n=Object(a.useState)({}),c=Object(j.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){if(""!==t){fetch(x(t,"reco","FINN")).then((function(e){return e.json()})).then((function(e){s(e)}));var e=document.querySelectorAll("h1");e.forEach((function(e){e.classList.add("flash")})),setTimeout((function(){e.forEach((function(e){e.classList.remove("flash")}))}),3e3)}}),[t]),void 0!==r[0]?Object(d.jsxs)("div",{className:"buyHold-container",children:[Object(d.jsx)("h1",{children:"buy/hold"}),Object(d.jsxs)("div",{className:"buy box",children:[Object(d.jsx)("span",{children:r[0].buy}),Object(d.jsx)("p",{children:"BUY"})]}),Object(d.jsxs)("div",{className:"neutral box",children:[Object(d.jsx)("span",{children:r[0].hold}),Object(d.jsx)("p",{children:"HOLD"})]}),Object(d.jsxs)("div",{className:"sell box",children:[Object(d.jsx)("span",{children:r[0].sell}),Object(d.jsx)("p",{children:"SELL"})]})]}):Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"NO DATA"})})};var y=function(e){return console.log("financials"),Object(d.jsxs)("div",{className:"row reverse",children:[Object(d.jsx)("div",{className:"box",children:Object(d.jsx)(v,{symbol:e.symbol,peerClick:e.peerClick})}),Object(d.jsx)("div",{className:"box",children:Object(d.jsx)(N,{symbol:e.symbol})}),Object(d.jsx)("div",{className:"box",children:Object(d.jsx)(g,{symbol:e.symbol})})]})},F=n.p+"static/media/rocket.254d7f6d.gif";var k=function(e){return console.log("ticker"),void 0===e.data.FMPdata?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"loading"}),Object(d.jsx)("img",{src:F,alt:"rocket-loader",height:"400",width:"400",style:{margin:"0 auto"}})]}):Object(d.jsxs)("div",{className:"ticker-container",children:[Object(d.jsx)(h,{data:e.data,symbol:e.data.FMPdata.symbol}),Object(d.jsx)(m,{data:e.data}),Object(d.jsx)(y,{symbol:e.data.FMPdata.symbol,peerClick:e.peerClick})]})};n(21);var w=function(e){var t=Object(a.useState)(""),n=Object(j.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)([]),i=Object(j.a)(s,2),o=i[0],l=i[1];return Object(d.jsx)("div",{className:"symbol-form",children:Object(d.jsxs)("form",{children:[Object(d.jsx)("label",{htmlFor:"symbol",className:"label",children:"Symbol: "}),Object(d.jsx)("input",{type:"input",list:"symbol",value:c,onChange:function(t){return function(t){t.preventDefault();var n=e.onSearch(e.trie,t.target.value);l(void 0===n?[]:n),r(t.target.value)}(t)}}),Object(d.jsx)("datalist",{id:"symbol",name:"symbolDD",children:o.map((function(e,t){return Object(d.jsx)("option",{value:e,children:e},t)}))}),Object(d.jsx)("button",{type:"submit",className:"btn btn-success",onClick:function(t){return e.onClick(t,c)},children:"Get quote"})]})})},M=n(9),P=n(11),S=n.n(P);function A(){this.root=new L}function L(){this.words=[],this.map=new S.a}function D(e){if(null===e)return[];if(0===e.map.size)return e.words;var t,n=[],a=Object(M.a)(e.map.values());try{for(a.s();!(t=a.n()).done;){var c,r=D(t.value),s=Object(M.a)(r);try{for(s.s();!(c=s.n()).done;){var i=c.value;n.push(i)}}catch(o){s.e(o)}finally{s.f()}}}catch(o){a.e(o)}finally{a.f()}return n}A.prototype.insert=function(e){for(var t=this.root,n=0;n<e.length;n++){var a=e[n];t.map.has(a)||t.map.set(a,new L),t=t.map.get(a)}t.words.push(e)},A.prototype.deepLookup=function(e){for(var t=this.root,n=0;n<e.length;n++){var a=e[n];if(!t.map.has(a))return;t=t.map.get(a)}return D(t)};var C=function(e,t){return e.insert(t)},E=function(e,t){return e.deepLookup(t)},q=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,fetch(x(t,"FMPprofile","FMP")).then((function(e){return e.json()})).then((function(e){return n.FMPdata=e[0]}));case 3:return e.next=5,fetch(x(t,"FMPquote","FMP")).then((function(e){return e.json()})).then((function(e){return n.FMPquote=e[0]}));case 5:return e.next=7,fetch(x(t,"profile","FINN")).then((function(e){return e.json()})).then((function(e){return n.FINNdata=e}));case 7:return e.next=9,fetch(x(t,"quote","FINN")).then((function(e){return e.json()})).then((function(e){return n.FINNquote=e}));case 9:return e.next=11,fetch(x(t,"metrics","FINN")).then((function(e){return e.json()})).then((function(e){return n.FINNmetrics=e}));case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var I=function(){console.log("app");var e=function(){for(var e=new A,t=["AAPL","GOOG","LULU","MSFT","TSLA","PLTR","GME","ETSY","EBAY","SBUX","ACAB","AAL","AMAT","MXIM","MNST","BMRN","ORLY","NVDA","NTAP","NFLX","AMZN","CERN","PAYX","PCAR","CSCO","CTXS","EA","VRSN","SPCE","WYNN","XLNX","IDXX"],n=0;n<t.length;n++)try{e.insert(t[n])}catch(a){console.log(a)}return e}(),t=Object(a.useState)(!0),n=Object(j.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)({}),i=Object(j.a)(s,2),b=i[0],u=i[1],h=Object(a.useState)(""),f=Object(j.a)(h,2),p=f[0],O=f[1],m=function(){var e=localStorage.getItem("ticker");return null===e?"AAPL":e};return Object(a.useEffect)(Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return""===p&&O(m()),e.next=3,q(p);case 3:t=e.sent,!Object.values(t).every((function(e){return null===e}))&&""!==p&&(r(!1),u(t));case 6:case"end":return e.stop()}}),e)}))),[p]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(w,{onClick:function(e,t){e.preventDefault(),localStorage.setItem("ticker",t),O(t)},trie:e,insert:C,onSearch:E}),Object(d.jsx)(k,{loading:c,data:b,peerClick:function(e,t){e.preventDefault(),O(t)}}),Object(d.jsxs)("p",{className:"data-attr",children:["Data provided by",Object(d.jsx)("a",{href:"https://financialmodelingprep.com/developer/docs/",target:"_blank",rel:"noreferrer",children:"financial modeling prep"})]})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),T()},8:function(e,t,n){}},[[22,1,2]]]);
//# sourceMappingURL=main.4451501a.chunk.js.map