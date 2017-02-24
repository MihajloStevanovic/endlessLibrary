import React, { Component } from 'react';
import EslNav from '../components/EslNav';
import EslList from '../components/EslList';

class MySeries extends Component {
	constructor(props) {
		super(props)
		this.state = {
			series: [
				{
					'id':'1',
					'name':"game of thrones",
					'type': "serie"
				},
				{
					'id':'2',
					'name':'vikings',
					'type': "serie"
				},
				{
					'id':'3',
					'name':'flash',
					'type': "serie"
				}
			]
		}
	}
  render() {
    return (
      <div className="Series">
        <EslNav />
        <h2>Mes dernières séries</h2>
        <EslList data={this.state.series}/>
      </div>
    );
  }
}

export default MySeries;
