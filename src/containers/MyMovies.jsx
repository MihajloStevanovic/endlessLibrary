import React, { Component } from 'react';
import EslNav from '../components/EslNav';
import EslList from '../components/EslList';

class MyMovies extends Component {
	constructor(props) {
		super(props)
		this.state = {
			films: [
				{
					'id':'1',
					'name': 'avatar',
					'type': "film"
				},
				{
					'id':'2',
					'name':'star wars',
					'type': "film"
				},
				{
					'id':'3',
					'name':'le hobbit',
					'type': "film"
				},
				{
					'id':'4',
					'name': 'avatar',
					'type': "film"
				},
				{
					'id':'5',
					'name':'star wars',
					'type': "film"
				},
				{
					'id':'6',
					'name':'le hobbit',
					'type': "film"
				}
			]
		}
	}
  render() {
    return (
      <div className="Films">
      	<EslNav />
        <h2>Mes derniers films</h2>
        <EslList data={this.state.films}/>
      </div>
    );
  }
}

export default MyMovies;
