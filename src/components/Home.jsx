import React, { Component } from 'react';
import Items from '../components/Items';
import Overview from '../components/Overview';
import {} from 'react-router'


import * as firebase from 'firebase';

class EslHome extends Component {
	constructor(props) {
		super(props)
		this.state = {
			films: {
				lastAdded : []
			},
			series: {
				lastAdded : []
			},
			appUserData : this.props.appUserData
		}
		this.handleImageLoaded = this.handleImageLoaded.bind(this)
		console.log(this.props)
	}

  /*
   *
	 */
	componentWillMount() {

		const $this = this
		firebase.database().ref("films/").once('value').then(function(snapshot) {
		  const response = snapshot.val();
	  	$this.setState({films:{lastAdded : response.lastAdded}})
		});
		firebase.database().ref("series/").once('value').then(function(snapshot) {
		  const response = snapshot.val();
	  	$this.setState({series:{lastAdded : response.lastAdded}})
		});


		
	}
  handleImageLoaded(target,prop,value) {
  	console.log(target.target,prop,value)
    this.setState({ imageStatus: 'loaded' });
    const imgs = document.querySelectorAll('img');
    //console.log(imgs)
    for (var i = 0; i < imgs.length; i++) {
		    imgs[i].style.opacity = 1;
		}
  }
  render() {
    return (
      <div className="Home">
        <Overview />
        <h2 className="items-title">Les dernièrs films ajoutés</h2>
        {this.state.films.lastAdded.length > 0 && <Items items={this.state.films.lastAdded}/>}
        <h2 className="items-title">Les dernières séries ajoutées</h2>
        {this.state.series.lastAdded.length > 0 && <Items items={this.state.series.lastAdded}/>}
      </div>
    );
  }
}

export default EslHome;
