import React, { Component } from 'react';
import EslNav from '../components/EslNav';

class MyProfile extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
  render() {
    return (
      <div className="Series">
        <EslNav />
        My profile
      </div>
    );
  }
}

export default MyProfile;
