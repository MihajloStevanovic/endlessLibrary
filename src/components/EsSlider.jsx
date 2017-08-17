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
		console.log(this.state.items)
		const oSettings = {
			dots: false,
      infinite: false,
      speed: 500,
      arrows: true,
      swipe: false,
		  slidesToShow: 7,
		  slidesToScroll: 1
		}
		const items = this.state.items.items
		return (
			<Slider {...oSettings}>
				{items.map((item,index) => {
					return (
	          <li key={index}>
	            <Link to={{ pathname: `/${item.type}s/${item.name}`, params: item }}>
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