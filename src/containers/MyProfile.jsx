import React, { Component } from 'react';
import Nav from '../components/Nav';

class MyProfile extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
  render() {
    return (
      <div className="Series">
        <Nav />
        My profile
      </div>
    );
  }
}

export default MyProfile;
