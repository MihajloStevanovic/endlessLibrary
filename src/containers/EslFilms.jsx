import React, { Component } from 'react';
import EslNav from '../components/EslNav';
import EslList from '../components/EslList';

import * as firebase from 'firebase';

class EslFilms extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loginStatus : window.localStorage.getItem('loginStatus'),
			films: [
				{
					'id':'1',
					'name': 'avatar  ezvgezvez',
					'type': "film"
				},
				{
					'id':'2',
					'name':'star wars ezfezf',
					'type': "film"
				},
				{
					'id':'3',
					'name':'le hobbit ezfezf',
					'type': "film"
				}
			],
			series: [
				{
					'id':'1',
					'name':"game of thrones ezfezf",
					'type': "serie"
				},
				{
					'id':'2',
					'name':'vikings zfezgfz',
					'type': "serie"
				},
				{
					'id':'3',
					'name':'flash ezfezf',
					'type': "serie"
				}
			]
		}
	}
	componentWillMount() {
		if(this.state.loginStatus !== 'true') {
		  this.props.router.push({
		       pathname: '/login'
		  });
		}
				const $this = this
		const ref = firebase.database().ref("films/").once('value').then(function(snapshot) {
		  const response = snapshot.val();
		  //console.log(response)
		  $this.setState({films:response})
		  console.log($this.state.films)
		});
	}
	componentDidMount() {

	}
  render() {
    return (
      <div className="Films">
      	<EslNav />
      	on est sur les films
        <h2>Les films les plus regardés</h2>
        <EslList data={this.state.films}/>
        <h2>Les films les plus aimés</h2>
        <EslList data={this.state.films}/>
        <button onClick={this.onClickButton}>button</button>
      </div>
    );
  }
}

export default EslFilms;
