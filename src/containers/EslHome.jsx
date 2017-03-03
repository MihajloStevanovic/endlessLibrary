import React, { Component } from 'react';
import EslNav from '../components/EslNav';
import EslList from '../components/EslList';

class EslHome extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loginStatus : window.localStorage.getItem('loginStatus'),
			films: [
				{
					'id':'1',
					'name': 'avatar',
					'type': "film"
				},
				{
					'id':'2',
					'name':'star wars',
					'type': "film"
				},
				{
					'id':'3',
					'name':'le hobbit',
					'type': "film"
				}
			],
			series: [
				{
					'id':'1',
					'name':"game of thrones",
					'type': "serie"
				},
				{
					'id':'2',
					'name':'vikings',
					'type': "serie"
				},
				{
					'id':'3',
					'name':'flash',
					'type': "serie"
				}
			]
		}
	}

  /*
   *
	 */
	componentWillMount() {
		if(this.state.loginStatus !== 'true') {
		  this.props.router.push({
		       pathname: '/login'
		  });
		}
		/*const connected = window.localStorage.getItem('connexion')
		this.setState({connexion : connected})
		if(this.state.connexion) {

		} else {
			//console.log('pas connecté')
			//this.props.router.push('/');
		}*/
	}
	componentDidMount() {

  }
  render() {
    return (
      <div className="Home">
        <EslNav />
        <h2>Les dernièrs films ajoutés</h2>
        <EslList data={this.state.films}/>
        <h2>Les dernières séries ajoutées</h2>
        <EslList data={this.state.series}/>
      </div>
    );
  }
}

export default EslHome;
