import React, { Component } from 'react';
import EslNav from '../components/EslNav';
import EslList from '../components/EslList';
import {Link} from 'react-router'

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
		
		console.log('loading')
		var element = document.createElement('div');
		element.className+= 'loader-wrapper';
		var app = document.querySelector('.esl-app');
		app.appendChild(element);
		if(this.state.loginStatus !== 'true') {
		  this.props.router.push({
		       pathname: '/login'
		  });
		}
		const $this = this
		const ref = firebase.database().ref("films/").once('value').then(function(snapshot) {
		  const response = snapshot.val();
		  var element = document.querySelector('.loader-wrapper');
			element.parentNode.removeChild(element);
		  $this.setState({films:response})
		  $this.setState({films:{mostViewed : response.mostViewed,mostLiked : response.mostLiked,all : response.all}})
		});
		console.log(this.state.films)
	}
	componentDidMount() {

	}
  render() {
    return (
      <div className="Films">
      	<EslNav />
      	<h1>Rubrique Tous les films</h1>
        <h2>Les films les plus regardés</h2>
        <ul className="List">
	      	{this.state.films.mostViewed.map((item,index) => (
	          <li key={index}>
	            <Link to={`/${item.type}/${item.id}`} >
	              <div>
	                <img src="#" alt="" />
	                <h2>{item.name}</h2>
	                <h3>{item.type}</h3>
	              </div>
	            </Link>
	          </li>
	        ))}
	      </ul>
        <h2>Les films les plus aimés</h2>
        <ul className="List">
	      	{this.state.films.mostLiked.map((item,index) => (
	          <li key={index}>
	            <Link to={`/${item.type}/${item.id}`} >
	              <div>
	                <img src="#" alt="" />
	                <h2>{item.name}</h2>
	                <h3>{item.type}</h3>
	              </div>
	            </Link>
	          </li>
	        ))}
	      </ul>
	      <h2>Tous les films</h2>
        <ul className="List">
	      	{this.state.films.mostLiked.map((item,index) => (
	          <li key={index}>
	            <Link to={`/${item.type}/${item.id}`} >
	              <div>
	                <img src="#" alt="" />
	                <h2>{item.name}</h2>
	                <h3>{item.type}</h3>
	              </div>
	            </Link>
	          </li>
	        ))}
	      </ul>
      </div>
    );
  }
}

export default EslFilms;
