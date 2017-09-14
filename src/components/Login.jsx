import React, { Component } from 'react';

import * as firebase from 'firebase';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
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
		  console.log(error)
		});
	}
  render() {
    return (
      <div className="login">
	      <div className="login-box">
						<h2 className="login-title">Connect with Facebook</h2>
						<button className="facebook-login-button" onClick={this.handleSignIn.bind(this)}>Sign in with Facebook</button>
				</div>
			</div>
    );
  }
}

export default Login;

				