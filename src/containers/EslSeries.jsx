import React, { Component } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Items from '../components/Items';
import {} from 'react-router'

import * as firebase from 'firebase';

class EslSeries extends Component {
constructor(props) {
		super(props)
		this.state = {
			loginStatus : window.localStorage.getItem('loginStatus'),
			series : {
				mostViewed : [],
				mostLiked : [],
				all : []
			}
		}
	}
	componentWillMount() {
		/*var element = document.createElement('div');
		element.className+= 'loader-wrapper';
		var app = document.querySelector('.esl-app');
		app.appendChild(element);*/

		const $this = this
		firebase.database().ref("series/").once('value').then(function(snapshot) {
		  const response = snapshot.val();
		  /*var element = document.querySelector('.loader-wrapper');
			element.parentNode.removeChild(element);*/
		  $this.setState({series:response})
		  $this.setState({series:{mostViewed : response.mostViewed,mostLiked : response.mostLiked,all : response.all}})
		});
		console.log(this.state.series)
	}
	componentDidMount() {

	}
  render() {
    return (
      <div className="Films">
      	<Nav />
      	<Header />
        <h2 className="items-title">Les séries les plus regardése</h2>
      	{this.state.series.mostViewed.length > 0 && <Items items={this.state.series.mostViewed}/>}
        <h2 className="items-title">Les séries les plus aimées</h2>
      	{this.state.series.mostLiked.length > 0 && <Items items={this.state.series.mostLiked}/>}
	      <h2 className="items-title">Toutes les séries</h2>
      	{this.state.series.mostLiked.length > 0 && <Items items={this.state.series.mostLiked}/>}
      </div>
    );
  }
}

export default EslSeries;
