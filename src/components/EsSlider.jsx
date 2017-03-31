import React, { Component } from 'react';
import Slider from 'react-slick'
import {Link} from 'react-router'
import ImageLoader from 'react-imageloader';

class EsSlider extends Component {
	constructor(props) {
		super(props)
		this.state = {
			items : props
		}
	}
	render() {
		const oSettings = {
			dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 2
		}
		const items = this.state.items.items
		return (
			<Slider {...oSettings}>
				{items.map((item,index) => {
					return (
	          <li key={index}>
	            <Link to={{ pathname: `/${item.type}s/${item.name}`, params: { showAge: true } }}>
	              <div>
	                <ImageLoader
								    src={item.img}>
								  </ImageLoader>
	                <h2>{item.name}</h2>
	                <h3>{item.type}</h3>
	              </div>
	            </Link>
	          </li>
          )
				})}
			</Slider>
		)
	}
}

export default EsSlider;