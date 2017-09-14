import React, { Component } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import {} from 'react-router';
import ImageLoader from 'react-imageloader';

import * as firebase from 'firebase';

class Item extends Component {
	constructor(props) {
		super(props)
    this.state = {
      film : {}
    }
    this.handleLike = this.handleLike.bind(this)
    this.handleView = this.handleView.bind(this)
    console.log(props)
	}
  componentWillMount() {
    const $this = this
    firebase.database().ref("films/all/"+this.props.params.filmId).once('value').then(function(snapshot) {
      const response = snapshot.val();
      /*var element = document.querySelector('.loader-wrapper');
      element.parentNode.removeChild(element);*/
      $this.setState({film:response})
      //$this.setState({films:{mostViewed : response.mostViewed,mostLiked : response.mostLiked,all : response.all}})
    });
    //console.log(this.state.films)
  }
  /*
   * Increment media likes number
   */
  handleLike() {
    const film = this.state.film
    const likes = film.likes
    const newValue = likes + 1
    film.likes = newValue
    this.setState({film: film})
  }
  /*
   * Increment media view number
   */
  handleView() {
    const film = this.state.film
    const views = film.views
    const newValue = views + 1
    film.views = newValue
    this.setState({film: film})
  }
  /*
   * Component render
   */
  render() {
    return (
      <div className="item-wrapper">
        <Nav />
        <Header />
        <div className="item-content">
          <div className="item-picture">
            <ImageLoader
              src={this.state.film.img}>
            </ImageLoader>
          </div>
          <div className="item-detail">
          	<h2 className="item-name">{this.state.film.name}</h2>
            <h3 className="item-categories">{this.state.film.category}</h3>
            <p className="item-summary">{this.state.film.summary}</p>
          </div>
          <div className="item-counter-bar">
            <div className="total-bar">
              <span className="total-likes">{this.state.film.likes} likes</span> | <span className="total-views">{this.state.film.views} views</span>
            </div>
            <div className="buttons-bar">
              <button onClick={this.handleLike}>J'aime</button>
              <button onClick={this.handleView}>J'ai vu</button>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Item;
