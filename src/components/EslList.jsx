import React, { Component } from 'react';
import {Link} from 'react-router'

class EslList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			items: props.data
		}
  console.log(this.props)
	}
  render() {
    return (
      <ul className="List">
      	{this.state.items.map((item,index) => (
          <li key={index}>
            <Link to={`/${item.type}/${item.id}`} >
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
