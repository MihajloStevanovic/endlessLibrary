import React, { Component } from 'react';
import {Link} from 'react-router'

import * as firebase from 'firebase';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  onLogOut() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      alert(error);
    });
  }
  onLogOutSuccess() {

  }
  render() {
    return (
      <div className="header">
        <h1>Moover</h1>
        <div className="header-navigation">
          <Link className="button-log-out" onClick={this.onLogOut.bind(this)} to="/">Log out</Link>
        </div>
      </div>
    );
  }
}

export default Header;
