import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { createStore } from "redux";

function processData(data)
{
	var data1 = [];
	var data2 = [];
	if (data)
	{
	for(var key of Object.keys(data))
	{
		data1.push([
			Date.UTC(parseInt(key.split('-')[0]),parseInt(key.split('-')[1])-1,parseInt(key.split('-')[2])),
			parseFloat(data[key]["1. open"]),
			parseFloat(data[key]["2. high"]),
			parseFloat(data[key]["3. low"]),
			parseFloat(data[key]["4. close"]),
			])
		data2.push([Date.UTC(parseInt(key.split('-')[0]),parseInt(key.split('-')[1])-1,parseInt(key.split('-')[2])),parseFloat(data[key]["5. volume"])])
	}
	}
	else
	{
		alert("Data fetch failed.\nTry Again after some time..");
	}
	return[data1,data2]
}

function getData(data)
{
	return fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NFTY&apikey=WCQOTPTPY8V3GALU").then(response => response.json()).then(new_data => processData(new_data["Time Series (Daily)"])).then(data_list => [...processData(data),...data_list])
}

function returnOptions(data_list,key)
{
	return {
			title: {
    				text: 'My Stock Chart'
  			},
			yAxis: [{
					height: '60%',
            		lineWidth: 2,
            		resize: {
                		enabled: true
            				}
        			}, 
					{
            			top: '65%',
            			height: '35%',
            			offset: 0,
            			lineWidth: 2
        			}
					],
			 tooltip: {
						useHTML: true,
    					borderRadius: 10,
						headerFormat: '<table>',
						pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
            							  '<td style="text-align: right"><b>{point.y}</b><br>{point.key}</td></tr>',
						footerFormat: '</table>',
        				valueDecimals: 2
        				},
			series: [
					{
						type: 'ohlc',
						id: 'ohlc-dy',
						name: `${key}-ohlc`,
						data: data_list[0]
					},
					{
						type: 'ohlc',
						id: 'ohlc-NIFTY',
						name: `NIFTY-ohlc`,
						data: data_list[2]
					},
					{
						type: 'column',
						id: 'volume-dy',
						name: `${key}-volume`,
						data: data_list[1],
						yAxis: 1
					},
					{
						type: 'column',
						id: 'volume-NIFTY',
						name: `NIFTY-volume`,
						data: data_list[3],
						yAxis: 1
					}
				],
			responsive: {
            			rules: [{
                		condition: {
                    			maxWidth: 800
                					},
                		chartOptions: {
                    		rangeSelector: { inputEnabled: false }
                					  }
            					}]
        				}
		};
}

function returnApp(options,ver=0)
{
	 var App;
	if (ver === 0)
	{
		App = () => (
 			 <div>
					<select onChange={ () => store.dispatch({type: document.getElementById('type').value}) } style={{width: '96%'}} id='type' value={store.getState()}>
						<option value='IBM'>IBM</option>
						<option value='ACN'>ACN</option>
						<option value='MMM'>MMM</option>
						<option value='ABT'>ABT</option>
						<option value='ADBE'>ADBE</option>
						<option value='AMD'>AMD</option>
						<option value='ATVI'>ATVI</option>
						<option value='AES'>AES</option>
						<option value='GOOGL'>GOOGL</option>
						<option value='AMZN'>AMZN</option>
						<option value='AON'>AON</option>
						<option value='AAPL'>AAPL</option>
						<option value='BAC'>BAC</option>
						<option value='AVGO'>AVGO</option>
					</select>
    				<HighchartsReact
      				highcharts={Highcharts}
      				constructorType={'stockChart'}
      				options={options}
    				/>
  			</div>
			);
	}
	else
	{
			App = () => (
 			 <div>
    			<HighchartsReact
      				highcharts={Highcharts}
      				constructorType={'stockChart'}
      				options={options}
    			/>
  			</div>
			);
	}
	return App;
}

const reducer = (state,action) => {
	if (action.type[0] !== '@')
	{
		fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${action.type}&apikey=WCQOTPTPY8V3GALU`)
		.then(response => response.json())
		.then(data => getData(data["Time Series (Daily)"]))
		.then(comb_data => returnOptions(comb_data,action.type))
		.then(options => returnApp(options))
		.then(App => render(<App />, document.getElementById('root')))
	}
	state = action.type;
	return state;
};


const store = createStore(reducer,{type:''})
store.dispatch({type: 'IBM'})



