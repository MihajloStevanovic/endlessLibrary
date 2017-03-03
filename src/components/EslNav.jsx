import React, { Component } from 'react';
import {Link} from 'react-router'

class MyNav extends Component {
  render() {
    return (
      <div className="nav">
        Médiathèque
        <ul>
        	<li><Link to="/home">home</Link></li>
        	<li><Link to="/movies">Films</Link></li>
        	<li><Link to="/series">Séries</Link></li>
        </ul>
        Mon profil
        <ul>
          <li><Link to="/my-movies">Mes films</Link></li>
          <li><Link to="/my-series">Mes séries</Link></li>
          <li><Link to="/my-profile">Mon résumé</Link></li>
        </ul>
      </div>
    );
  }
}

export default MyNav;
