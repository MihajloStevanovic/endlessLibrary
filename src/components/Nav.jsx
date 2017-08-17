import React, { Component } from 'react';
import {Link} from 'react-router'

class MyNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchClass : 'search-result'
    }
    this.searchFocus = this.searchFocus.bind(this)
    this.searchClose = this.searchClose.bind(this)
  }
  searchFocus() {
    console.log(this)
    this.setState({searchClass : 'search-result active'})
  }
  searchClose() {
    this.setState({searchClass : 'search-result'})
  }
  render() {
    return (
      <div className="nav-wrapper">
        <div className={this.state.searchClass}>
          liste des résultats
        </div>
        <div className="nav">
          <div>{this.props.userName}</div> 
          <form className="search-form">
            <input type="text" onFocus={this.searchFocus} onBlur={this.searchClose} placeholder="Rechercher un film" />
          </form>
          <ul>
          	<li><Link to="/">Home</Link></li>
          	<li><Link to="/films">Films</Link></li>
          	<li><Link to="/series">Séries</Link></li>
          </ul>
          <ul>
            <li><Link to="/my-movies">Mes films</Link></li>
            <li><Link to="/my-series">Mes séries</Link></li>
            <li><Link to="/my-profile">Mon résumé</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MyNav;
