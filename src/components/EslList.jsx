import React, { Component } from 'react';
import {Link} from 'react-router'

class EslList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			items: props.data
		}
    console.log('3',props)
	}
  componentDidMount() {
    console.log('bis', this.props)
  }
  render() {
    console.log('4 rendering')
    return (
      <ul className="List">
      	{this.state.items.map((item,index) => (
          <li key={index}>
            <Link to={`/${item.type}/${item.id}`} item={item}>
              <div>
                <img src="#" alt="" />
                <h2>{item.name}</h2>
                <h3>{item.type}</h3>
              </div>
            
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default EslList;
