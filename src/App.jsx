import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';

import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCyps_XX9ngz5LuS8lR4m2ZmfQf2czhRWk",
  authDomain: "endless-movies-library.firebaseapp.com",
  databaseURL: "https://endless-movies-library.firebaseio.com",
  storageBucket: "endless-movies-library.appspot.com",
  messagingSenderId: "805416648017"
};
firebase.initializeApp(config);

class App extends Component {
	/*
   * Constructor : initial state
	 * 
	 */
	constructor(props) {
		super(props)
		this.state = {
			session : false,
			fbUserData : undefined,
			appUserData : undefined
		}
		
	}
	/*
   * Component will mount
	 * 
	 */
	componentWillMount() {
		this.getSignInStatus()
	}
	/*
   * Get if user is connected
	 * 
	 */
	getSignInStatus() {
		const $this = this
		firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
		    $this.getUser(user.uid)
				$this.setState({session : true, fbUserData: user})
		  } else {
				$this.setState({session : false})
		  }
		});
	}
	/*
   * Handle the Facebook login Popin
	 *
	 */
	handleSignIn() {
		const $this = this
		const provider = new firebase.auth.FacebookAuthProvider();
		firebase.auth().signInWithPopup(provider).then(function(result) {
		  $this.onSignInSuccess(result)
		}).catch(function(error) {
		  console.log('Facebook login has failed')
		});
	}
	/*
   *
	 */
	onSignInSuccess(result) {
		this.setState({fbUserData : result, session : 'true'})
		this.getUser(this.state.fbUserData.user.uid)
	}
	/*
   *
	 */
	getUser(fbUid) {
		const $this = this
		firebase.database().ref('users/').once('value').then(function(snapshot) {
			const response = snapshot.val()
			const user = response[fbUid]
			if(user) {
				$this.onUserExist(user)
			} else {
				$this.onUserNotExist(fbUid)
			}
		}).catch(function(error) {
			console.log(error)
		});
	}
	/*
   *
	 */
	onUserExist(data) {
		this.setState({appUserData : data})
	}
	/*
   *
	 */
	onUserNotExist(fbUid) {
		//var newPostKey = firebase.database().ref().child('users').push().key;
		var updates = {};
	  updates['/users/' + fbUid] = {email: this.state.fbUserData.user.email};
		return firebase.database().ref().update(updates);
	}
	/*
   *
	 */
  render() {
    return (
      <div className="App">
      	<Nav />
      	<Header />
        {(this.state.session === false) &&
				<div>
					<h1>Connexion</h1>
					<button onClick={this.handleSignIn.bind(this)}>Sign in with Facebook</button>
				</div> }
				{(this.state.appUserData !== undefined && this.state.session === true) &&
					<Home appUserData={this.state.appUserData} /> }
      </div>
    );
  }
}

export default App;
