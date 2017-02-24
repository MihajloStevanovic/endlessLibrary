import React, { Component } from 'react';
import {Link} from 'react-router'

class EslList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			list: props.data
		}
	}
  render() {
    return (
      <ul className="List">
      	{this.props.data.map((item,index) => (
          <li key={index}>
            <Link to={`/${item.type}/${item.id}`} >
              <div>
                <img src="{item.imgage}" alt="" />
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
