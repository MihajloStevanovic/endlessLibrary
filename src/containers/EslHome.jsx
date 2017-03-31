import React, { Component } from 'react';
import EslNav from '../components/EslNav';
import ImageLoader from 'react-imageloader';
import EsSlider from '../components/EsSlider';
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
			},
			imageStatus: 'loading' 
		}
		this.handleImageLoaded = this.handleImageLoaded.bind(this)
	}

  /*
   *
	 */
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
		firebase.database().ref("films/").once('value').then(function(snapshot) {
		  const response = snapshot.val();
		  $this.setState({films:{lastAdded : response.lastAdded}})
		});
		firebase.database().ref("series/").once('value').then(function(snapshot) {
		  const response = snapshot.val();
		  /*var element = document.querySelector('.loader-wrapper');
			element.parentNode.removeChild(element);*/
		  $this.setState({series:{lastAdded : response.lastAdded}})
		});

		
	}
	componentDidMount() {
		console.log('rendu')
  }
  handleImageLoaded(target,prop,value) {
  	console.log(target.target,prop,value)
    this.setState({ imageStatus: 'loaded' });
    const imgs = document.querySelectorAll('img');
    //console.log(imgs)
    for (var i = 0; i < imgs.length; i++) {
		    imgs[i].style.opacity = 1;
		}
  }
  render() {
  	console.log(this.state)
    return (
      <div className="Home">
        <EslNav />
        <h1 className="header">Welcome</h1>
        <h2>Les dernièrs films ajoutés</h2>
        {this.state.films.lastAdded.length > 0 && <EsSlider items={this.state.films.lastAdded}/>}
        <h2>Les dernières séries ajoutées</h2>
        {this.state.series.lastAdded.length > 0 && <EsSlider items={this.state.series.lastAdded}/>}
      </div>
    );
  }
}

export default EslHome;
