import React, { Component } from 'react';
import EslNav from '../components/EslNav';
import EslList from '../components/EslList';
import {Link} from 'react-router'

import * as firebase from 'firebase';

class EslHome extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loginStatus : window.localStorage.getItem('loginStatus'),
			films: {
				lastAdded : []
			},
			series: {
				lastAdded : []
			}
		}
	}

  /*
   *
	 */
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
		const films = firebase.database().ref("films/").once('value').then(function(snapshot) {
		  const response = snapshot.val();
		  $this.setState({films:{lastAdded : response.lastAdded}})
		});
		const series = firebase.database().ref("series/").once('value').then(function(snapshot) {
		  const response = snapshot.val();
		  var element = document.querySelector('.loader-wrapper');
			element.parentNode.removeChild(element);
		  $this.setState({series:{lastAdded : response.lastAdded}})
		});

		console.log(this.state)
	}
	componentDidMount() {
  }
  render() {
    return (
      <div className="Home">
        <EslNav />
        <h2>Les dernièrs films ajoutés</h2>
        <ul className="List">
	      	{this.state.films.lastAdded.map((item,index) => (
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
        <h2>Les dernières séries ajoutées</h2>
        <ul className="List">
	      	{this.state.series.lastAdded.map((item,index) => (
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

export default EslHome;
