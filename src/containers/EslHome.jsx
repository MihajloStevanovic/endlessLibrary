import React, { Component } from 'react';
import EslNav from '../components/EslNav';
import EslList from '../components/EslList';

class EslHome extends Component {
	constructor(props) {
		super(props)
		this.state = {
			connexion : false,
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
		console.log(this.props.connexion)
	}
	componentDidMount() {

  }

  /*
   *
	 */
	componentWillMount() {
		const connected = window.localStorage.getItem('connexion')
		this.setState({connexion : connected})
		if(!this.state.connexion) {
			console.log('pas connecté')
			this.props.router.push('/home');
		}
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
