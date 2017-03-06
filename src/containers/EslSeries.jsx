import React, { Component } from 'react';
import EslNav from '../components/EslNav';
import ImageLoader from 'react-imageloader';
import {Link} from 'react-router'

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
		
		console.log('loading')
		/*var element = document.createElement('div');
		element.className+= 'loader-wrapper';
		var app = document.querySelector('.esl-app');
		app.appendChild(element);*/
		if(this.state.loginStatus !== 'true') {
		  this.props.router.push({
		       pathname: '/login'
		  });
		}
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
      	<EslNav />
      	<h1 className="header">Rubrique Toutes les séries</h1>
        <h2>Les séries les plus regardése</h2>
        <ul className="List">
	      	{this.state.series.mostViewed.map((item,index) => (
	          <li key={index}>
	            <Link to={`/${item.type}/${item.id}`} >
	              <div>
	              	<ImageLoader
								    src={item.img}>
								  </ImageLoader>
	                <h2>{item.name}</h2>
	                <h3>{item.type}</h3>
	              </div>
	            </Link>
	          </li>
	        ))}
	      </ul>
        <h2>Les séries les plus aimées</h2>
        <ul className="List">
	      	{this.state.series.mostLiked.map((item,index) => (
	          <li key={index}>
	            <Link to={`/${item.type}/${item.id}`} >
	              <div>
	                <ImageLoader
								    src={item.img}>
								  </ImageLoader>
	                <h2>{item.name}</h2>
	                <h3>{item.type}</h3>
	              </div>
	            </Link>
	          </li>
	        ))}
	      </ul>
	      <h2>Toutes les séries</h2>
        <ul className="List">
	      	{this.state.series.mostLiked.map((item,index) => (
	          <li key={index}>
	            <Link to={`/${item.type}/${item.id}`} >
	              <div>
	                <ImageLoader
								    src={item.img}>
								  </ImageLoader>
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

export default EslSeries;
