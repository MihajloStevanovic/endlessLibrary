import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fbUserData : this.props.fbUserData
    }
    console.log(props)
  }
  render() {
    return (
      <div className="overview">
        <div className="picture">
          <img src={this.state.fbUserData.photoURL} alt="" />
        </div>
        <div className="name">{this.state.fbUserData.displayName}</div>
        <ul className="resume">
          <li>Movies : <span>474</span></li>
          <li>TV shows : <span>231</span></li>
          <li>Suggestions des contacts</li>
        </ul>
      </div>
    );
  }
}

export default Overview;
