import React, { Component } from 'react';
import {router} from 'react-router'
import EslNav from './components/EslNav';

import * as firebase from 'firebase';

class App extends Component {
	/*
   *
	 */
	constructor(props) {
		super(props)
		this.state = {
			loginStatus : window.localStorage.getItem('loginStatus'),
			login : undefined,
			password : undefined,
			loginError: false,
			userData: null
		}
		this.getConnexion = this.handleSubmit.bind(this)
		this.handleLoginChange = this.handleLoginChange.bind(this)
		this.handlePasswordChange = this.handlePasswordChange.bind(this)
		
	}
	/*
   *
	 */
	componentWillMount() {
		if(this.state.loginStatus === 'true') {
		  this.props.router.push({
		       pathname: '/home'
		  });
		}
	}
	/*
   *
	 */
	handleLoginChange(e){
		this.setState({login : e.target.value })
	}
	/*
   *
	 */
	handlePasswordChange(e){
		this.setState({password : e.target.value })
	}
	/*
   *
	 */
	handleSubmit(e) {
		e.preventDefault()
		this.displayLoader()
		const $this = this
		const login = this.state.login
		const ref = firebase.database().ref("users/"+login).once('value').then(function(snapshot) {
		  const response = snapshot.val();
		  console.log(response)
		  $this.requestSucces(login,response)
		});
	}
	displayLoader() {
		console.log('loading')
		var element = document.createElement('div');
		element.className+= 'loader-wrapper';
		var app = document.querySelector('.esl-app');
		app.appendChild(element);
	}
	/*
   *
	 */
	requestSucces(login,response) {
		if(this.state.password === response.password) {
	  	//@todo:get data
	  	this.setState({userData : response.data})
	  	window.localStorage.setItem('loginStatus', true);
	  	this.setState({connected : true})
	  	this.loadData()
			//@todo:init app
	  } else {
	  	this.setState({loginError : true})
	  	//@todo: manage error
	  }

		var element = document.querySelector('.loader-wrapper');
		element.parentNode.removeChild(element);
	}
	/*
   *
	 */
	loadData(data) {
		this.setState({loginError : false})
		this.props.router.push({
		     pathname: '/home',
		     state: {connected: this.state.connected}
		});
	}
	/*
   *
	 */
  render() {
    return (
      <div className="App">
      	<EslNav />
        app
        {this.state.loginError && <div>informations de connexion erronés</div>}
        {!this.state.connexion &&
        <form className="connexion-form">
        	<label>Login</label>
	      	<input type="text" onChange={this.handleLoginChange}/>
	      	<label>Mot de passe</label>
					<input type="password" onChange={this.handlePasswordChange}/>
					<button onClick={this.handleSubmit.bind(this)}>connexion</button>
	      </form> }
      </div>
    );
  }
}

export default App;
