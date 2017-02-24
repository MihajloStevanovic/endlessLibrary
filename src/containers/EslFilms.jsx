import React, { Component } from 'react';
import EslNav from '../components/EslNav';
import EslList from '../components/EslList';

import * as firebase from 'firebase';

class EslFilms extends Component {
	constructor(props) {
		super(props)
		this.state = {
			films: null
		}
		this.onLoadData = this.onLoadData.bind(this)
	}
	onLoadData() {
		const ref = firebase.database().ref("films/").once('value').then(function(snapshot) {
		  const films = this.state.films
		  const datas = snapshot.val();
		  //this.setState({films:datas})
		  console.log(datas);
		  console.log(this.state);
		});
	}
  render() {
    return (
      <div className="Films">
      	<EslNav />
      	{this.onLoadData()}
        <h2>Les films les plus regardés</h2>
        <EslList data={this.state.films}/>
        <h2>Les films les plus aimés</h2>
        <EslList data={this.state.films}/>
        <button onClick={this.onClickButton}>button</button>
      </div>
    );
  }
}

export default EslFilms;
