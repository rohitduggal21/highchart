(this.webpackJsonphighchart=this.webpackJsonphighchart||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(4),o=n(0),r=n.n(o),i=n(6),l=n(1),c=n.n(l),p=n(2),u=n.n(p),s=n(7);function h(e){for(var t=[],n=[],a=0,o=Object.keys(e);a<o.length;a++){var r=o[a];t.push([Date.UTC(parseInt(r.split("-")[0]),parseInt(r.split("-")[1])-1,parseInt(r.split("-")[2])),parseFloat(e[r]["1. open"]),parseFloat(e[r]["2. high"]),parseFloat(e[r]["3. low"]),parseFloat(e[r]["4. close"])]),n.push([Date.UTC(parseInt(r.split("-")[0]),parseInt(r.split("-")[1])-1,parseInt(r.split("-")[2])),parseFloat(e[r]["5. volume"])])}return[t,n]}var m=Object(s.a)((function(e,t){return"@"!==t.type[0]&&fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=".concat(t.type,"&apikey=WCQOTPTPY8V3GALU")).then((function(e){return e.json()})).then((function(e){return function(e){return fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NFTY&apikey=WCQOTPTPY8V3GALU").then((function(e){return e.json()})).then((function(e){return h(e["Time Series (Daily)"])})).then((function(t){return[].concat(Object(a.a)(h(e)),Object(a.a)(t))}))}(e["Time Series (Daily)"])})).then((function(e){return n=e,{title:{text:a=t.type},yAxis:[{startOnTick:!1,endOnTick:!1,labels:{align:"right",x:-3},title:{text:"OHLC"},height:"60%",lineWidth:2,resize:{enabled:!0}},{labels:{align:"right",x:-3},title:{text:"Volume"},top:"65%",height:"35%",offset:0,lineWidth:2}],tooltip:{shape:"square",headerShape:"callout",borderWidth:0,shadow:!1,positioner:function(e,t,n){var a=this.chart;return n.isHeader?{x:Math.max(a.plotLeft,Math.min(n.plotX+a.plotLeft-e/2,a.chartWidth-e-a.marginRight)),y:n.plotY}:{x:n.series.chart.plotLeft,y:n.series.yAxis.top-a.plotTop}}},series:[{type:"ohlc",id:"ohlc-dy",name:"".concat(a,"-ohlc"),data:n[0]},{type:"ohlc",id:"ohlc-NIFTY",name:"NIFTY-ohlc",data:n[2]},{type:"column",id:"volume-dy",name:"".concat(a,"-volume"),data:n[1],yAxis:1},{type:"column",id:"volume-NIFTY",name:"NIFTY-volume",data:n[3],yAxis:1}],responsive:{rules:[{condition:{maxWidth:800},chartOptions:{rangeSelector:{inputEnabled:!1}}}]}};var n,a})).then((function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return 0===t?function(){return r.a.createElement("div",null,r.a.createElement("select",{onChange:function(){return m.dispatch({type:document.getElementById("type").value})},style:{width:"96%"},id:"type",value:m.getState()},r.a.createElement("option",{value:"IBM"},"IBM"),r.a.createElement("option",{value:"ACN"},"ACN"),r.a.createElement("option",{value:"MMM"},"MMM"),r.a.createElement("option",{value:"ABT"},"ABT"),r.a.createElement("option",{value:"ADBE"},"ADBE"),r.a.createElement("option",{value:"AMD"},"AMD"),r.a.createElement("option",{value:"ATVI"},"ATVI"),r.a.createElement("option",{value:"AES"},"AES"),r.a.createElement("option",{value:"GOOGL"},"GOOGL"),r.a.createElement("option",{value:"AMZN"},"AMZN"),r.a.createElement("option",{value:"AON"},"AON"),r.a.createElement("option",{value:"AAPL"},"AAPL"),r.a.createElement("option",{value:"BAC"},"BAC"),r.a.createElement("option",{value:"AVGO"},"AVGO")),r.a.createElement(u.a,{highcharts:c.a,constructorType:"stockChart",options:e}))}:function(){return r.a.createElement("div",null,r.a.createElement(u.a,{highcharts:c.a,constructorType:"stockChart",options:e}))}}(e)})).then((function(e){return Object(i.render)(r.a.createElement(e,null),document.getElementById("root"))})),t.type}),{type:""});m.dispatch({type:"IBM"})},9:function(e,t,n){e.exports=n(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.05a64876.chunk.js.map