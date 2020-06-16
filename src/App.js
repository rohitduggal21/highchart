import React from 'react';
export class App extends React.Component {
	render() {
		return (
			 <div>
					<select onChange={this.state.bind(this)} style={{width: '96%'}}>
						<option value='IBM'>IBM</option>
						<option value='ACN'>ACN</option>
					</select>
    				<HighchartsReact
      				highcharts={Highcharts}
      				constructorType={'stockChart'}
      				options={options}
    				/>
  			</div>
		);
	};

const reducer = (state,action) => {
	if (action.type[0] !== '@')
	{
		fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${action.type}&apikey=WCQOTPTPY8V3GALU`)
		.then(response => response.json())
		.then(data => processData(data['Monthly Time Series']))
		.then(data_list => returnOptions(data_list))
		.then(options =>	returnApp(options))
		.then(App => render(<App />, document.getElementById('root')))
	}
	state = action.type;
	return state;
};

const store = createStore(reducer,{type:'IBM'})
