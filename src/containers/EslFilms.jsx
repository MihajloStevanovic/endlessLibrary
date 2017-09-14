import React, { Component } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Items from '../components/Items';
import {} from 'react-router'

import * as firebase from 'firebase';

class EslFilms extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loginStatus : window.localStorage.getItem('loginStatus'),
			films : {
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
		firebase.database().ref("films/").once('value').then(function(snapshot) {
		  const response = snapshot.val();
		  /*var element = document.querySelector('.loader-wrapper');
			element.parentNode.removeChild(element);*/
		  $this.setState({films:response})
		  $this.setState({films:{mostViewed : response.mostViewed,mostLiked : response.mostLiked,all : response.all}})
		});
	}
	componentDidMount() {

	}
  render() {
    return (
      <div className="Films">
      	<Nav />
      	<Header />
        <h2 className="items-title">Les films les plus regardés</h2>
      	{this.state.films.mostViewed.length > 0 && <Items items={this.state.films.mostViewed}/>}
        <h2 className="items-title">Les films les plus aimés</h2>
        {this.state.films.mostLiked.length > 0 && <Items items={this.state.films.mostLiked}/>}
	      <h2 className="items-title">Tous les films</h2>
        {this.state.films.mostLiked.length > 0 && <Items items={this.state.films.mostLiked}/>}
      </div>
    );
  }
}

export default EslFilms;
