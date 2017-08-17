import React, { Component } from 'react';
import EsSlider from '../components/EsSlider';
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
        <div className="overview">
					overview...
        </div>
        <h2>Les dernièrs films ajoutés</h2>
        {this.state.films.lastAdded.length > 0 && <EsSlider items={this.state.films.lastAdded}/>}
        <h2>Les dernières séries ajoutées</h2>
        {this.state.series.lastAdded.length > 0 && <EsSlider items={this.state.series.lastAdded}/>}
      </div>
    );
  }
}

export default EslHome;
