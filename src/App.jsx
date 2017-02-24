import React, { Component } from 'react';
import {Link} from 'react-router'
import EslNav from './components/EslNav';

import * as firebase from 'firebase';

class App extends Component {
	/*
   *
	 */
	constructor(props) {
		super(props)
		this.state = {
			connexion : false,
			login : undefined,
			password : undefined,
			loginError: false,
			userData: null
		}
		this.getConnexion = this.handleSubmit.bind(this)
		this.handleLoginChange = this.handleLoginChange.bind(this)
		this.handlePasswordChange = this.handlePasswordChange.bind(this)
		console.log(this.props)
	}
	/*
   *
	 */
	componentWillMount() {
		const connected = window.localStorage.getItem('connexion')
		this.setState({connexion : connected})
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
		const $this = this
		const login = this.state.login
		const ref = firebase.database().ref("users/"+login).once('value').then(function(snapshot) {
		  const response = snapshot.val();
		  $this.requestSucces(login,response)
		});
	}
	/*
   *
	 */
	requestSucces(login,response) {
		if(this.state.password === response.password) {
	  	//@todo:get data
	  	this.setState({userData : response.data})
	  	this.loadData()
			//@todo:init app
	  } else {
	  	this.setState({loginError : true})
	  	//@todo: manage error
	  }
	}
	/*
   *
	 */
	loadData(data) {
		this.setState({loginError : false})
		this.setState({connexion : true})
		this.props.router.push('/home');
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
