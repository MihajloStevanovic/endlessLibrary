import React, { Component } from 'react';
import {Link} from 'react-router'

class Overview extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div className="overview">
        <li>Résumé</li>
        <li>To watch list</li>
        <li>Suggestions d'amis</li>
        <li></li>
      </div>
    );
  }
}

export default Overview;
