(this.webpackJsonpgraph=this.webpackJsonpgraph||[]).push([[0],{45:function(e,n,t){"use strict";t.r(n);var r,c=t(1),a=t.n(c),i=t(22),o=t.n(i),s=t(3),l=t(2),u=t.p+"static/media/space-mono-v6-latin-regular.c7c48180.woff",f=t.p+"static/media/space-mono-v6-latin-regular.8f145baa.woff2",d=t.p+"static/media/yesteryear-v9-latin-regular.1e31d32f.woff",b=t.p+"static/media/yesteryear-v9-latin-regular.e0145294.woff2",h=t.p+"static/media/oxygen-mono-v8-latin-regular.f22732cf.woff",j=t.p+"static/media/oxygen-mono-v8-latin-regular.92335db1.woff2",p=t.p+"static/media/tenali-ramakrishna-v7-latin-regular.7a93ac0c.woff",g=t.p+"static/media/tenali-ramakrishna-v7-latin-regular.f3e65ca0.woff2",m=t.p+"static/media/rozha-one-v8-latin-regular.a5b7e71f.woff",x=t.p+"static/media/rozha-one-v8-latin-regular.c3f8aa93.woff2",O=t.p+"static/media/basic-v10-latin-regular.d5cc3ee4.woff",v=t.p+"static/media/basic-v10-latin-regular.18616044.woff2",w=Object(l.b)(r||(r=Object(s.a)(["\n     /* space-mono-regular - latin */\n    @font-face {\n        font-family: 'Space Mono';\n        src:    url(",") format('woff2'),\n                url(",") format('woff');\n    }\n    /* yesteryear-regular - latin */\n    @font-face {\n        font-family: 'Yesteryear';\n        src:    url(",") format('woff2'),\n                url(",") format('woff');\n    }\n  /* oxygen-mono-regular - latin */\n  @font-face {\n        font-family: 'Oxygen Mono';\n        src:    url(",") format('woff2'),\n                url(",") format('woff');\n    }\n  /* tenali-ramakrishna-regular - latin */\n  @font-face {\n        font-family: 'Tenali Ramakrishna';\n        src:    url(",") format('woff2'),\n                url(",") format('woff');\n    }\n  /* rozha-one-regular - latin */\n  @font-face {\n        font-family: 'Rozha One';\n        src:    url(",") format('woff2'),\n                url(",") format('woff');\n    }\n  /* basic-regular - latin */\n  @font-face {\n        font-family: 'Basic';\n        src:    url(",") format('woff2'),\n                url(",") format('woff');\n    }\n"])),f,u,b,d,j,h,g,p,x,m,v,O),y=t(6),k=t.n(y),S=t(7),z=t(4),C=t(12),E=t(5),I=t(26),F=t.n(I);function M(){this.root=new N,this.size=0}function N(){this.words=[],this.map=new F.a}function B(e){if(null===e)return[];if(0===e.map.size)return e.words;var n,t=[],r=Object(E.a)(e.map.values());try{for(r.s();!(n=r.n()).done;){var c,a=B(n.value),i=Object(E.a)(a);try{for(i.s();!(c=i.n()).done;){var o=c.value;t.push(o)}}catch(s){i.e(s)}finally{i.f()}}}catch(s){r.e(s)}finally{r.f()}return t}M.prototype.insert=function(e){for(var n=this.root,t=0;t<e.length;t++){var r=e[t];n.map.has(r)||n.map.set(r,new N),n=n.map.get(r)}n.words.push(e),++this.size},M.prototype.deepLookup=function(e){for(var n=this.root,t=0;t<e.length;t++){var r=e[t];if(!n.map.has(r))return;n=n.map.get(r)}return B(n)},M.prototype.size=function(){return this.size};var P,D,A,L,G,q,_,T,H,R,J,W,Y,$,K,Q,U,V,X,Z,ee,ne,te,re,ce,ae,ie,oe,se,le,ue,fe,de,be,he,je,pe,ge=function(e,n){return e.insert(n)},me=function(e,n){return e.deepLookup(n)},xe=function(e,n,t){switch(t="FMP"===t?"?apikey=fe052be73f5dbfe3e882f17c1fad13bb":"&token=c1mts1a37fktjjdr6ji0",n){case"market":n="https://financialmodelingprep.com/api/v3/market-hours";break;case"list":n="https://financialmodelingprep.com/api/v3/stock/list";break;case"FMPquote":n="https://financialmodelingprep.com/api/v3/quote/",n+=e;break;case"FMPprofile":n="https://financialmodelingprep.com/api/v3/profile/",n+=e;break;case"graphData":n="https://financialmodelingprep.com/api/v3/historical-price-full/",n+=e;break;case"gainers":n="https://financialmodelingprep.com/api/v3/gainers";break;case"losers":n="https://financialmodelingprep.com/api/v3/losers";break;case"x":n="https://financialmodelingprep.com/api/v3/quotes/index";break;case"builder":n="https://financialmodelingprep.com/api/v3/stock/list";break;default:return}return n.concat(t)},Oe=function(){var e=Object(S.a)(k.a.mark((function e(n){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={},n){e.next=3;break}return e.abrupt("return",{});case 3:return e.next=5,fetch(xe(n,"FMPprofile","FMP")).then((function(e){return e.json()})).then((function(e){return t.FMPdata=e[0]}));case 5:return e.next=7,fetch(xe(n,"FMPquote","FMP")).then((function(e){return e.json()})).then((function(e){return t.FMPquote=e[0]}));case 7:return e.next=9,fetch(xe(n,"graphData","FMP")).then((function(e){return e.json()})).then((function(e){return t.graphData=e}));case 9:return e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ve=function(){var e=Object(S.a)(k.a.mark((function e(n){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={},e.t0=n,e.next="gainers"===e.t0?4:"losers"===e.t0?7:"x"===e.t0?10:13;break;case 4:return e.next=6,fetch(xe(n,"gainers","FMP")).then((function(e){return e.json()})).then((function(e){t.newStocks=e}));case 6:return e.abrupt("break",14);case 7:return e.next=9,fetch(xe(n,"losers","FMP")).then((function(e){return e.json()})).then((function(e){t.newStocks=e}));case 9:return e.abrupt("break",14);case 10:return e.next=12,fetch(xe(n,"x","FMP")).then((function(e){return e.json()})).then((function(e){return t.newStocks=e}));case 12:case 13:return e.abrupt("break",14);case 14:return e.abrupt("return",t);case 15:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),we=function(){var e=Object(S.a)(k.a.mark((function e(){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,fetch(xe(null,"builder","FMP")).then((function(e){return e.json()})).then((function(e){return n.data=e}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ye=function(){var e=Object(S.a)(k.a.mark((function e(n){var t,r,c,a,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],r=[],"https://financialmodelingprep.com/api/v3/",c="symbol/available-indexes?apikey=".concat("fe052be73f5dbfe3e882f17c1fad13bb"),e.next=6,fetch("https://financialmodelingprep.com/api/v3/"+c).then((function(e){return e.json()})).then((function(e){return r=e}));case 6:for(a=0;a<r.length;++a)i={index:a,symbol:r[a].symbol,name:r[a].name,stockExchange:r[a].stockExchange},t.push(i);return e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ke=function(){var e=Object(S.a)(k.a.mark((function e(n){var t,r,c,a,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},r=[],c="https://financialmodelingprep.com/api/v3/historical-price-full/",c+=n,c+="?apikey=".concat("fe052be73f5dbfe3e882f17c1fad13bb"),e.next=7,fetch(c).then((function(e){return e.json()})).then((function(e){return r=e}));case 7:for(a=0;a<r.historical.length;++a)i=r.historical[a],t[i.date]=i.open;return e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Se=function(){var e=Object(S.a)(k.a.mark((function e(n){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],"https://financialmodelingprep.com/api/v3/stock_news?limit=50&apikey=","fe052be73f5dbfe3e882f17c1fad13bb",e.next=5,fetch("https://financialmodelingprep.com/api/v3/stock_news?limit=50&apikey=fe052be73f5dbfe3e882f17c1fad13bb").then((function(e){return e.json()})).then((function(e){return t=e}));case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ze=t(0),Ce=function(e){var n=e.children,t=e.theme;return Object(ze.jsx)(l.a,{theme:t,children:n})},Ee={name:"light",bg:"rgb(255,255,255)",bgalt:"rgb(192,192,192)",bgi:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.publicdomainpictures.net%2Fen%2Fview-image.php%3Fimage%3D28763%26picture%3Dplain-white-background&psig=AOvVaw3uWU29-rDqtt50Drd-Zx6t&ust=1629482863996000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjpve_WvfICFQAAAAAdAAAAABAD",color:"rgb(0,0,0)",coloralt:"rgb(0,0,0,.25)",deco:"rgb(218, 165, 32)",accent:"rgb(127, 255, 0)",font:"Basic",fs:"large",fw:"400"},Ie={name:"dark",bg:"rgb(0,0,0)",bgalt:"rgb(51, 51, 51)",bgi:"https://wallpaperaccess.com/full/173801.png",color:"rgb(255,255,255)",coloralt:"rgb(192,192,192)",deco:"rgb(218, 165, 32)",accent:"rgb(127, 255, 0)",font:"Space Mono",fs:"large",fw:"400"},Fe={name:"solar",bg:"rgb(45, 57, 58)",bgalt:"rgb(28, 40, 81)",bgi:"https://solarsystem.nasa.gov/system/news_items/main_images/492_Pluto_Main_1600.jpg",color:"rgb(255, 199, 74)",coloralt:"rgb(255, 122, 24)",deco:"rgb(73, 99, 107)",accent:"rgb(219, 37, 32)",font:"Space Mono",fs:"xx-large",fw:"700"},Me={name:"jazz",bg:"rgb(59, 167, 246)",bgalt:"rgb(69, 105, 159)",bgi:"https://jazzdesk.files.wordpress.com/2020/07/r-505799-1567909500-2838.jpeg-2.jpg",color:"rgb(10, 52, 102)",coloralt:"rgb(50, 48, 76)",deco:"rgb(163, 188, 208)",accent:"rgb(246, 147, 240)",font:"Yesteryear",fs:"xx-large",fw:"400"},Ne={name:"grayscale",bg:"rgb(238, 238, 238)",bgalt:"rgb(204, 204, 204)",bgi:"https://t3.ftcdn.net/jpg/02/01/88/74/240_F_201887441_f6lxO1xrywsWeJ1CFRqvzls2zK4hX6B3.jpg",color:"rgb(51, 51, 51)",coloralt:"rgb(102, 102, 102)",deco:"rgb(153, 153, 153)",accent:"rgb(153, 153, 153)",font:"Tenali Ramakrishna",fs:"large",fw:"400"},Be={name:"rainbow",bg:"rgb(55, 131, 255)",bgalt:"rgb(55, 185, 255)",bgi:"https://media.istockphoto.com/vectors/abstract-pastel-rainbow-gradient-background-ecology-concept-for-your-vector-id1248151713?k=6&m=1248151713&s=170667a&w=0&h=khKBbb_8mSZPPMuluguTh-fvRuyk2HoFgtIukB9gkhI=",color:"rgb(72, 21, 170)",coloralt:"rgb(77, 233, 76)",deco:"rgb(255, 238, 0)",accent:"rgb(246, 0, 0)",font:"Rozha One",fs:"xx-large",fw:"400"},Pe={name:"golf",bg:"rgb(180, 187, 208)",bgalt:"rgb(199, 209, 226)",bgi:"https://assets-cms.thescore.com/uploads/image/file/459276/w640xh480_GettyImages-805299128.jpg?ts=1623092247",color:"rgb(7, 12, 5)",coloralt:"rgb(60, 92, 16)",deco:"rgb(196, 172, 108)",accent:"rgb(231, 222, 180)",font:"Space Mono",fs:"x-large",fw:"400"},De=Object(l.b)(P||(P=Object(s.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    font-family: '","';\n    color: '","';\n  }\n  body {\n    position: relative;\n    height: 100%;\n    width: 100%;\n    background-color: ",";\n    background-position: center;\n    background-size: cover;\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n"])),(function(e){return e.theme.font}),(function(e){return e.theme.color}),(function(e){return e.theme.bg})),Ae=t(27),Le=l.c.div(D||(D=Object(s.a)(["\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex: 1 1 auto;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    color: ",";\n    text-decoration: '","';\n"])),(function(e){return e.theme.color}),(function(e){return e.theme.deco})),Ge=l.c.div(A||(A=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n"]))),qe=(l.c.div(L||(L=Object(s.a)(["\n    width: 100vw;\n    height: 100vh;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n"]))),l.c.i(G||(G=Object(s.a)(["\n  padding: 5px 5px;\n  color: ",";\n"])),(function(e){return e.theme.deco}))),_e=l.c.a(q||(q=Object(s.a)(["\n  color: ",";\n  text-decoration: underline ",";\n"])),(function(e){return e.theme.color}),(function(e){return e.theme.color})),Te=l.c.h1(_||(_=Object(s.a)(["\n  margin-right: 1em;\n"]))),He=l.c.div(T||(T=Object(s.a)(["\n    width: 100%;\n    height: 100%;\n    height: auto;\n    display: flex;\n    flex: 1;\n    flex-grow: 1;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    &"," {\n      margin-left: 5em;\n    }\n    overflow-x: scroll;\n    scroll-behavior: smooth;\n"])),qe),Re=l.c.button(H||(H=Object(s.a)(["\n    position: fixed;\n    display: inline-block;\n    top: 1em;\n    left: 1em;\n    margin: 0 auto;\n    padding: 0;\n    z-index: 999;\n"]))),Je=l.c.ul(R||(R=Object(s.a)(["\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n"]))),We=l.c.li(J||(J=Object(s.a)(["\n    float: left;\n"]))),Ye=l.c.div(W||(W=Object(s.a)(["\n    margin: 0;\n    display: inline-block;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n    border: 1px solid ",";\n"])),(function(e){return e.theme.coloralt})),$e=l.c.div(Y||(Y=Object(s.a)(["\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n"]))),Ke=Object(l.c)(We)($||($=Object(s.a)(["\n  display: inline-block;\n  &:hover {\n    background-color: red;\n  }\n  &:hover "," {\n    display: block;\n  }\n"])),$e),Qe=l.c.a(K||(K=Object(s.a)(["\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n  &:hover {\n    background-color: #f1f1f1;\n  }\n"]))),Ue=l.c.div(Q||(Q=Object(s.a)(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  display: inline-block;\n  "]))),Ve=l.c.p(U||(U=Object(s.a)(["\n  color: white;\n  font-size: xx-small;\n"]))),Xe=l.c.input(V||(V=Object(s.a)(["\n  position: relative;\n  width: 5em;\n  height: 1.5em;\n  font-size: 1.25em;\n  padding: .25em;\n  background: ",";\n  text-transform: uppercase;\n"])),(function(e){return e.theme.deco})),Ze=l.c.datalist(X||(X=Object(s.a)(["\n    position: absolute;\n    background-color: #f6f6f6;\n    min-width: 230px;\n    max-height: 500px;\n    overflow: auto;\n    border: 1px solid rgb(155, 147, 147);\n    z-index: 1;\n"]))),en=l.c.option(Z||(Z=Object(s.a)(["\n  \n"]))),nn=l.c.label(ee||(ee=Object(s.a)(["\n  padding-right: 2em;\n  font-size: inherit;\n"]))),tn=l.c.input.attrs({type:"submit",value:"Search"})(ne||(ne=Object(s.a)(["\n  background: ",";\n  color: ",";\n  font-family: ",";\n  cursor: pointer;\n  text-transform: uppercase;\n  width: 5em;\n  border-radius: 5px;\n  height: 3em;\n  margin-left: 3em;\n  border: none;\n  transition: 0.15s;\n  text-align: center;\n  &:active {\n    background-color: ",";\n    color: ",";\n    border: .5px solid ",";\n  }\n"])),(function(e){return e.theme.bgalt}),(function(e){return e.theme.coloralt}),(function(e){return e.theme.font}),(function(e){return e.theme.bg}),(function(e){return e.theme.color}),(function(e){return e.theme.deco})),rn=l.c.h2(te||(te=Object(s.a)(["\n  font-variant: small-caps;\n  color: ",";\n  text-decoration: underline ",";\n"])),(function(e){return e.theme.color}),(function(e){return e.theme.coloralt})),cn=l.c.p(re||(re=Object(s.a)(["\n  color: ",";\n"])),(function(e){return e.theme.color})),an=l.c.div(ce||(ce=Object(s.a)(["\n    animation: flash 1s infinite;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    background: ",";\n\n    @keyframes flash {\n        from {\n          box-shadow: 0 0 0 ",";\n        }\n      \n        to {\n            box-shadow: 0 0 100px ",";\n        }\n      }\n"])),(function(e){return e.theme.bg}),(function(e){return e.theme.coloralt}),(function(e){return e.theme.coloralt})),on=l.c.div(ae||(ae=Object(s.a)(["\n    animation: scroll 110s infinite;\n    display: flex;\n    flex-direction: row;\n\n    @keyframes scroll {\n      0% {\n        transform: translate3d(50%, 0, 0);\n        visibility: visible;\n      }\n      100% {\n        transform: translate3d(-50%, 0, 0);\n      }\n    }\n"]))),sn=t.p+"static/media/hidden_bg.8a48efe8.png",ln=(l.c.div(ie||(ie=Object(s.a)(["\n  background-image: url('https://www.pngplay.com/wp-content/uploads/9/Gopher-PNG-Clipart-Background.png');\n  position: absolute;\n  top: 100vh;\n  left: 25px;\n  transform: translate3d(0,0,0);\n  transition: all 1s;\n"]))),l.c.div(oe||(oe=Object(s.a)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    display: flex;\n    flex: 1 1 auto;\n    flex-grow: 1;\n    flex-direction: row;\n    justify-content: space-evenly;\n    background: ",";\n    border-bottom-left-radius: 25px;\n    transition: .5s transform ease-in-out;\n"])),(function(e){return e.theme.bg}))),un=l.c.div(se||(se=Object(s.a)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    background: none;\n    border-bottom-left-radius: 25px;\n    transition: .5s all ease-in-out;\n"]))),fn=l.c.div(le||(le=Object(s.a)(["\n    background: url(",") no-repeat center center;\n    background-size: cover;\n    position: relative;\n    top: 0px;\n    right: 0px;\n    border-bottom-left-radius: 25px;\n    height: 25vh;\n    width: 25vw;\n    overflow: hidden;\n    transition: .5s all ease-in-out;\n"])),sn),dn=l.c.div(ue||(ue=Object(s.a)(["\n    border: 5px solid ",";\n    width: 50%;\n    border-radius: 50%;\n    margin: 1em auto;\n    background: rgb(0,0,0);\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n"])),(function(e){return e.theme.deco})),bn=l.c.div(fe||(fe=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border: .5px solid ",";\n    background: ",";\n    color: ",";\n    border-radius: 25px;\n    padding: .25em .5em;\n    margin: .1em .5em;\n    cursor: pointer;\n    &:hover {\n        border: .5px solid ",";\n        background: ",";\n        color: ",";\n    }\n"])),(function(e){return e.theme.deco}),(function(e){return e.theme.bg}),(function(e){return e.theme.color}),(function(e){return e.theme.bg}),(function(e){return e.theme.bgalt}),(function(e){return e.theme.coloralt})),hn=l.c.div(de||(de=Object(s.a)(["\n    color: ",";\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 100%;\n    margin: 0 3em;\n    "])),(function(e){return"gainers"===e.query?"red":"green"})),jn=l.c.div(be||(be=Object(s.a)(["\n    font-size: xx-large;\n    font-weight: 500;\n"]))),pn=l.c.div(he||(he=Object(s.a)(["\n    font-size: medium;\n    font-weight: 300;\n"]))),gn=l.c.div(je||(je=Object(s.a)(["\n    font-size: large;\n    font-weight: 400;\n"])));l.c.div(pe||(pe=Object(s.a)(["\n\n"])));var mn=function(e){return Object(ze.jsxs)(on,{children:["x"===e.query&&void 0!==e.current.newStocks&&e.current.newStocks.map((function(e,n){return Object(ze.jsxs)(hn,{children:[Object(ze.jsx)(jn,{className:"name",children:e.symbol}),Object(ze.jsxs)(pn,{className:"delta",children:[e.changesPercentage,"%"]}),Object(ze.jsxs)(gn,{className:"current",children:["$",e.price]})]},n)})),"gainers"===e.query&&void 0!==e.current.newStocks&&e.current.newStocks.map((function(e,n){return Object(ze.jsxs)(hn,{children:[Object(ze.jsx)(jn,{className:"name",children:e.ticker}),Object(ze.jsxs)(pn,{className:"delta",children:[e.changes,"%"]}),Object(ze.jsxs)(gn,{className:"current",children:["$",e.price]})]},n)})),"losers"===e.query&&void 0!==e.current.newStocks&&e.current.newStocks.map((function(e,n){return Object(ze.jsxs)(hn,{children:[Object(ze.jsx)(jn,{className:"name",children:e.ticker}),Object(ze.jsxs)(pn,{className:"delta",children:[e.changes,"%"]}),Object(ze.jsxs)(gn,{className:"current",children:["$",e.price]})]},n)}))]})};var xn=function(){var e=Object(c.useState)(""),n=Object(z.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)([]),i=Object(z.a)(a,2),o=i[0],s=i[1],l=function(){var e=Object(c.useState)(0),n=Object(z.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(0),i=Object(z.a)(a,2),o=i[0],s=i[1],l=Object(c.useState)(0),u=Object(z.a)(l,2),f=u[0],d=u[1];return Object(c.useEffect)((function(){document.addEventListener("mousemove",(function(e){r(e.clientX),s(e.clientY),d(0)}))})),{x:t,y:o,z:f}}(),u=window.innerHeight,f=window.innerWidth,d=function(e){r(e);for(var n=document.getElementsByClassName("radio"),t=0;t<n.length;++t)n[t].id===e?(r(n[t].id),n[t].innerHTML=n[t].innerHTML.toUpperCase()):n[t].innerHTML=n[t].innerHTML.toLowerCase()};return Object(c.useEffect)((function(){r("x")}),[]),Object(c.useEffect)((function(){var e=document.getElementById("shade");l.x>=f-f/4&&l.y<=u/4?e.style.transform="translate(100%, -200%)":e.style.transform="translate(0%, 0%)"}),[l,u,f]),Object(c.useEffect)((function(){(function(){var e=Object(S.a)(k.a.mark((function e(){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve(t);case 2:n=e.sent,s(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(ze.jsxs)(fn,{children:[Object(ze.jsxs)(un,{children:[Object(ze.jsxs)(dn,{id:"left-lens",children:[Object(ze.jsx)(bn,{className:"radio",onClick:function(){return d("gainers")},id:"gainers",children:"Gainers"}),Object(ze.jsx)(bn,{className:"radio",onClick:function(){return d("losers")},id:"losers",children:"Losers"}),Object(ze.jsx)(bn,{className:"radio",onClick:function(){return d("x")},id:"x",children:"Indices"})]}),Object(ze.jsx)(dn,{id:"right-lens",children:Object(ze.jsx)(mn,{query:t,current:o})})]}),Object(ze.jsx)(ln,{id:"shade"})]})};var On,vn,wn,yn,kn,Sn,zn,Cn,En,In,Fn,Mn=function(e){return Object(ze.jsxs)(Le,{children:[Object(ze.jsx)(Ge,{children:Object(ze.jsx)(xn,{query:e.query,chooseIndex:e.chooseIndex})}),Object(ze.jsxs)(He,{children:[Object(ze.jsx)(Te,{children:"charge your knowledge"}),Object(ze.jsx)(qe,{className:"fas fa-chevron-right fa-1x"})]}),Object(ze.jsxs)(He,{children:[Object(ze.jsx)(Te,{children:"stock with intent"}),Object(ze.jsx)(an,{children:Object(ze.jsx)(Ae.a,{style:{color:"inherit"},smooth:!0,to:"#content",children:Object(ze.jsx)(qe,{className:"fas fa-chevron-down fa-1x"})})})]})]})},Nn=l.c.div(On||(On=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: auto;\n    flex-grow: 1;\n    transition: all .5s ease-in-out;\n"]))),Bn=l.c.div(vn||(vn=Object(s.a)(["\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 0;\n    width: 100%;\n    height: auto;\n    margin: auto 2em;\n    transition: all .5s ease-in-out;\n    &:before {\n        background-image: url(",');\n        content: "";\n        background-size: cover;\n        position: absolute;\n        top: 0px;\n        right: 0px;\n        bottom: 0px;\n        left: 0px;\n        opacity: 0.75;\n    }\n'])),(function(e){return e.theme.bgi})),Pn=l.c.div(wn||(wn=Object(s.a)(["\n    position: relative;\n    height: 100%;\n    width: 100%;\n"]))),Dn=l.c.div(yn||(yn=Object(s.a)(["\n    display: flex;\n    position: absolute;\n    top: 0;\n    right: 0;\n"]))),An=l.c.div(kn||(kn=Object(s.a)(["\n    width: 100%;\n    height: 85vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: center;\n    background: ",";\n    overflow: auto;\n"])),(function(e){return e.theme.bg})),Ln=l.c.div(Sn||(Sn=Object(s.a)(["\n    position: relative;\n    background: ",";\n    height: 10vh;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    & "," {\n        position: absolute;\n        top: 0px;\n        right: 0px;\n    }\n"])),(function(e){return e.theme.bg}),qe),Gn=l.c.h1(zn||(zn=Object(s.a)(["\n    color: ",";\n    text-shadow: 1px 1px ",";\n    text-decoration: underline dotted ",";\n    text-align: center;\n"])),(function(e){return e.theme.color}),(function(e){return e.theme.coloralt}),(function(e){return e.theme.deco})),qn=l.c.div(Cn||(Cn=Object(s.a)(["\n    height: auto;\n    width: 100%;\n    max-width: 100vw;\n    overflow: hidden;\n    flex: 1;\n    display: flex;\n    flex-grow: 0;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    overflow-x: scroll;\n    transition: all .25s ease-in-out;\n"]))),_n=l.c.div(En||(En=Object(s.a)(["\n    max-width: 100vw;\n    display: flex;\n    flex-direction: row;\n    overflow-x: scroll;\n"]))),Tn=l.c.div(In||(In=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),Hn=l.c.h1(Fn||(Fn=Object(s.a)(["\n    font-variant: small-caps;\n    color: ",";\n    text-shadow: 2px 2px ",";\n"])),(function(e){return e.theme.color}),(function(e){return e.theme.bgalt})),Rn=t(15);t(44);var Jn,Wn,Yn,$n,Kn,Qn=function(e){var n=Object(c.useState)(window.innerHeight),t=Object(z.a)(n,2),r=t[0],a=t[1],i=Object(c.useState)(window.innerWidth),o=Object(z.a)(i,2),s=o[0],l=o[1],u=Object(c.useState)([]),f=Object(z.a)(u,2),d=(f[0],f[1],Object(c.useState)({})),b=Object(z.a)(d,2),h=b[0],j=b[1],p=Object(c.useState)(""),g=Object(z.a)(p,2),m=g[0],x=g[1];Object(c.useEffect)((function(){return window.addEventListener("resize",(function(){a(window.innerHeight),l(window.innerWidth)})),function(){return window.removeEventListener("resize",(function(){}))}}),[r,s]);var O=function(e){ke(e).then((function(e){j(e)}))};return Object(c.useEffect)((function(){O("^DJI"),x("Dow Jones Industrial Average")}),[]),Object(ze.jsxs)(qn,{id:"graph",children:[Object(ze.jsx)(qe,{className:"fas fa-times fa-2x",onClick:function(){return e.shrink()}}),Object(ze.jsx)(He,{children:Object(ze.jsx)(_n,{children:e.indices.map((function(e){return Object(ze.jsx)(bn,{id:"idx".concat(e.index),onClick:function(){var n;O(e.symbol),n=e.name,x(n)},children:e.symbol},"idx".concat(e.index))}))})}),Object(ze.jsx)(He,{children:Object(ze.jsx)(Hn,{children:m})}),Object(ze.jsx)(Tn,{children:Object(ze.jsx)(Rn.a,{data:h,width:s})})]})},Un=l.c.div(Jn||(Jn=Object(s.a)(["\n    position: relative;\n    height: auto;\n    width: 100%;\n    max-width: 100vw;\n    overflow: scroll;\n    display: flex;\n    flex: 1;\n    flex-grow: 0;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    transition: all .25s ease-in-out;\n    & "," {\n        position: absolute;\n        top: 0;\n        left: 50%;\n        transform: translate(-50%, 0%);\n    }\n"])),qe),Vn=l.c.div(Wn||(Wn=Object(s.a)(["\n    display: flex;\n    overflow: auto;\n    flex: 1;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-end;\n    overflow-x: scroll;\n    margin: .1em;\n    padding: .1em;\n    border: .5px solid ",";\n    box-shadow: 0px 0px 10px ",";\n"])),(function(e){return e.theme.bgalt}),(function(e){return e.theme.bgalt})),Xn=(l.c.div(Yn||(Yn=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),l.c.img($n||($n=Object(s.a)(["\n    max-height: 200px;\n    width: auto;\n"])))),Zn=l.c.div(Kn||(Kn=Object(s.a)(["\n    padding-top: 3em;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: flex-start;\n    overflow-x: scroll;\n"])));var et,nt,tt=function(e){return Object(ze.jsxs)(Un,{id:"news",children:[Object(ze.jsx)(qe,{className:"fas fa-times fa-2x",onClick:function(){return e.shrink()}}),Object(ze.jsx)(Zn,{children:e.stories.map((function(e){return""===e.image?null:Object(ze.jsxs)(Vn,{children:[Object(ze.jsx)(Xn,{src:e.image}),Object(ze.jsxs)(rn,{children:[e.title.substring(0,100),"..."]}),Object(ze.jsxs)(cn,{children:[e.text.substring(0,100),"..."]})]},e.publishedDate)}))})]})},rt=l.c.div(et||(et=Object(s.a)(["\n    height: 100%;\n    width: 100%;\n    display: none;\n    flex-flow: row wrap;\n    /* justify-content: center;\n    align-items: center; */\n    transition: all .25s ease-in-out;\n"]))),ct=l.c.div(nt||(nt=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 50vw;\n    height: 50vh;\n\n"])));var at,it=function(e){var n=e.data,t=e.setInterval;return n==={}?Object(ze.jsx)("div",{children:"Loading"}):Object(ze.jsxs)(ct,{children:[Object(ze.jsx)(He,{children:[{title:"1yr",length:"year"},{title:"6mo",length:"6mo"},{title:"3mo",length:"3mo"},{title:"1mo",length:"1mo"},{title:"1w",length:"1w"}].map((function(e){return Object(ze.jsx)(bn,{className:"radio",onClick:function(){return t(e.length)},id:"gainers",children:e.title},e.title)}))}),Object(ze.jsx)(Rn.a,{data:n,width:"50vw"})]})},ot=l.c.p(at||(at=Object(s.a)(["\n    color: ",";\n    text-decoration: underline ",";\n"])),(function(e){return e.theme.color}),(function(e){return e.theme.color}));var st=function(e){var n=e.data;return n?Object(ze.jsxs)(ct,{children:[Object(ze.jsxs)(ot,{children:["Industry => ",n.industry]}),Object(ze.jsxs)(ot,{children:["Price => ",n.price]}),Object(ze.jsxs)(ot,{children:["Avg Vol => ",n.volAvg]}),Object(ze.jsxs)(cn,{children:[n.description.substring(0,256),"..."]})]}):Object(ze.jsx)(ct,{})};var lt,ut=function(e){var n=e.data;return Object(ze.jsx)(ct,{children:Object(ze.jsx)("h1",{children:n})})},ft=l.c.div(lt||(lt=Object(s.a)(["\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 auto;\n    justify-content: center;\n    align-items: center;\n"])));var dt=function(e){var n=e.data;return console.log("data :>> ",n),n?Object(ze.jsx)(ct,{children:Object(ze.jsxs)(ft,{children:[Object(ze.jsx)(Gn,{children:n.companyName}),Object(ze.jsxs)(rn,{children:[n.city,",",n.country]}),Object(ze.jsxs)(cn,{children:[n.fullTimeEmployees," employees"]}),Object(ze.jsx)(_e,{href:n.website,children:"website"})]})}):Object(ze.jsx)(ct,{})};var bt=function(e){var n=e.data,t=Object(c.useState)({}),r=Object(z.a)(t,2),a=r[0],i=r[1],o=Object(c.useState)(!0),s=Object(z.a)(o,2),l=(s[0],s[1]),u=Object(c.useState)("year"),f=Object(z.a)(u,2),d=f[0],b=f[1];return Object(c.useEffect)((function(){if(void 0!==n.graphData){var e=365;switch(d){case"year":e=365;break;case"6mo":e=187;break;case"3mo":e=93;break;case"1mo":e=30;break;case"1w":e=7}for(var t={},r=0;r<e;++r)t[n.graphData.historical[r].date]=n.graphData.historical[r].close;i(t),l(!0)}}),[n.graphData,d]),Object(ze.jsxs)(rt,{id:"company",children:[Object(ze.jsx)(dt,{data:n.FMPdata}),Object(ze.jsx)(st,{data:n.FMPdata}),Object(ze.jsx)(it,{data:a,setInterval:b}),Object(ze.jsx)(ut,{data:"Advanced Data"})]})};var ht=function(e){var n=Object(c.useState)(""),t=Object(z.a)(n,2),r=t[0],a=t[1],i=Object(c.useState)(!1),o=Object(z.a)(i,2),s=o[0],l=o[1],u=Object(c.useState)([]),f=Object(z.a)(u,2),d=f[0],b=f[1],h=Object(c.useState)({}),j=Object(z.a)(h,2),p=(j[0],j[1],Object(c.useState)([])),g=Object(z.a)(p,2),m=(g[0],g[1]),x=Object(c.useState)(""),O=Object(z.a)(x,2),v=(O[0],O[1],function(e){console.log(e);var n=document.getElementById("news"),t=document.getElementById("news-bar"),r=document.getElementById("graph"),c=document.getElementById("idx-bar");document.getElementById("shrink");switch(e){case"news":n.style.flexGrow=1,r.style.flexGrow=0,c.style.display="none";break;case"graph":n.style.flexGrow=0,r.style.flexGrow=1,t.style.display="none"}}),w=function(){console.log("shrink"),document.getElementById("news").style.flexGrow=0,document.getElementById("news-bar").style.display="flex",document.getElementById("graph").style.flexGrow=0,document.getElementById("idx-bar").style.display="flex"};return Object(c.useEffect)((function(){var e=document.getElementById("upper"),n=document.getElementById("lower"),t=document.getElementById("label"),r=document.getElementById("close"),c=document.getElementById("company");!0===s?(t.innerHTML="",c.style.display="flex",c.style.flexGrow=1,n.style.flexGrow=1,e.style.flexGrow=0,e.style.display="none",r.style.display="flex"):!1===s&&(t.innerHTML=" stock symbol -> ",r.style.display="none",n.style.flexGrow=0,e.style.display="flex",e.style.flexGrow=1,c.style.flexGrow=0,c.style.display="none")}),[s]),Object(c.useEffect)((function(){m(e.indices)}),[e.indices]),Object(ze.jsxs)(Le,{id:"content",children:[Object(ze.jsxs)(Nn,{id:"upper",children:[Object(ze.jsxs)(He,{children:[Object(ze.jsxs)(nn,{id:"label",children:["Search for a symbol "," -> "]}),Object(ze.jsx)(Xe,{list:"symbol",value:r,onChange:function(n){return function(n){n.preventDefault();var t=e.search(e.trie,n.target.value);b(void 0===t?["Loading..."]:t),a(n.target.value)}(n)},onClick:e.onClick,trie:e.trie,insert:e.insert}),Object(ze.jsx)(Ze,{id:"symbol",children:d.map((function(e,n){return Object(ze.jsx)(en,{value:e,children:e},n)}))}),Object(ze.jsx)(tn,{onClick:function(n){e.onClick(n,r),l(!0)}})]}),Object(ze.jsxs)(An,{id:"graphs",children:[Object(ze.jsx)(Ln,{id:"news-bar",onClick:function(){return v("news")},children:Object(ze.jsx)(Gn,{children:"News"})}),Object(ze.jsx)(tt,{stories:e.stories,shrink:w}),Object(ze.jsx)(Ln,{id:"idx-bar",onClick:function(){return v("graph")},children:Object(ze.jsx)(Gn,{children:"Indices"})}),Object(ze.jsx)(Qn,{id:"graph",indices:e.indices,shrink:w})]}),null!==window.localStorage.getItem("ticker")?Object(ze.jsx)(qe,{className:"fas fa-chevron-up fa-3x",onClick:function(){return l(!0)}}):null]}),Object(ze.jsx)(Bn,{id:"lower",children:Object(ze.jsxs)(Pn,{children:[Object(ze.jsx)(Dn,{children:Object(ze.jsx)(qe,{id:"close",onClick:function(){l(!1),a("")},className:"fas fa-times fa-2x"})}),Object(ze.jsx)(bt,{data:e.data})]})})]})};var jt=function(e){return Object(ze.jsx)(Re,{children:Object(ze.jsx)(Je,{children:Object(ze.jsxs)(Ke,{children:[Object(ze.jsx)(Ye,{children:e.theme.name}),Object(ze.jsxs)($e,{children:[Object(ze.jsx)(Qe,{onClick:function(){return e.switch("light")},children:"Light"}),Object(ze.jsx)(Qe,{onClick:function(){return e.switch("dark")},children:"Dark"}),Object(ze.jsx)(Qe,{onClick:function(){return e.switch("solar")},children:"Solar"}),Object(ze.jsx)(Qe,{onClick:function(){return e.switch("jazz")},children:"Jazz"}),Object(ze.jsx)(Qe,{onClick:function(){return e.switch("grayscale")},children:"Grayscale"}),Object(ze.jsx)(Qe,{onClick:function(){return e.switch("rainbow")},children:"Rainbow"}),Object(ze.jsx)(Qe,{onClick:function(){return e.switch("golf")},children:"Golf"})]})]})})})};var pt=function(){return Object(ze.jsx)(Ue,{children:Object(ze.jsxs)(Ve,{className:"data-attr",children:["Data provided by",Object(ze.jsx)("a",{href:"https://financialmodelingprep.com/developer/docs/",target:"_blank",rel:"noreferrer",children:"financial modeling prep"}),"Images provided by",Object(ze.jsx)("a",{href:"https://pngtree.com/so/Blue",target:"_blank",rel:"noreferrer",children:"BluePNG"})]})})};var gt=function(){var e=function(){var e=Object(c.useState)([]),n=Object(z.a)(e,2),t=n[0],r=n[1];return Object(c.useEffect)((function(){!function(){var e=Object(S.a)(k.a.mark((function e(){var n,t,c,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,we();case 2:for(n=e.sent,t=[],c=0;c<n.data.length;++c)((a=n.data[c]).exchange.includes("New York")||a.exchange.includes("Nasdaq"))&&t.push(a.symbol);r(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),t}(),n=function(e){for(var n=new M,t=0;t<e.length;t++)try{n.insert(e[t])}catch(r){console.log(r)}return n}(e),t=Object(c.useState)(!0),r=Object(z.a)(t,2),a=r[0],i=r[1],o=Object(c.useState)({}),s=Object(z.a)(o,2),l=s[0],u=s[1],f=Object(c.useState)(""),d=Object(z.a)(f,2),b=d[0],h=d[1],j=Object(c.useState)(Ee),p=Object(z.a)(j,2),g=p[0],m=p[1],x=Object(c.useState)(""),O=Object(z.a)(x,2),v=O[0],w=O[1],y=Object(c.useState)([]),E=Object(z.a)(y,2),I=E[0],F=E[1],N=Object(c.useState)([]),B=Object(z.a)(N,2),P=(B[0],B[1],Object(c.useState)([])),D=Object(z.a)(P,2),A=D[0],L=D[1],G=function(){var e=localStorage.getItem("ticker");return null===e?"AAPL":e};return Object(c.useEffect)((function(){(function(){var e=Object(S.a)(k.a.mark((function e(){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return""===b&&h(G()),e.next=3,Oe(b);case 3:n=e.sent,!Object.values(n).every((function(e){return null===e}))&&""!==b&&(console.log("temp",n),u(n),i(!1));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b]),Object(c.useEffect)((function(){w("gainers"),m(Ie);for(var t=0;t<e.length;++t)ge(n,e[t]);ye().then((function(e){return F(e)})),Se().then((function(e){return L(e)})),i(!1)}),[a]),!1===a&&l==={}?Object(ze.jsx)("div",{children:"Loading..."}):Object(ze.jsxs)(C.a,{children:[Object(ze.jsx)(pt,{}),Object(ze.jsxs)(Ce,{theme:g,className:"App",children:[Object(ze.jsx)(De,{theme:g}),Object(ze.jsx)(jt,{switch:function(e){switch(e){case"light":console.log("light"),m(Ee);break;case"dark":m(Ie),console.log("dark");break;case"solar":m(Fe),console.log("solar");break;case"jazz":m(Me),console.log("jazz");break;case"grayscale":m(Ne),console.log("grayscale");break;case"rainbow":m(Be),console.log("rainbow");break;case"golf":m(Pe),console.log("golf");break;default:console.log("null")}},theme:g}),Object(ze.jsx)(Mn,{theme:g,query:v,chooseIndex:function(e){switch(e){case"x":case"gainers":case"losers":console.log("data",e),w(e)}}}),Object(ze.jsx)(ht,{stories:A,indices:I,symbol:b,data:l,loading:a,trie:n,onClick:function(e,n){e.preventDefault(),localStorage.setItem("ticker",n),h(n)},peerClick:function(e,n){e.preventDefault(),h(n)},insert:ge,search:me,id:"stocker"})]})]})},mt=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,47)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),a(e),i(e)}))};o.a.render(Object(ze.jsxs)(a.a.StrictMode,{children:[Object(ze.jsx)(w,{}),Object(ze.jsx)(gt,{})]}),document.getElementById("root")),mt()}},[[45,1,2]]]);
//# sourceMappingURL=main.308343a5.chunk.js.map