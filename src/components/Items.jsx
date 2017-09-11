import React, { Component } from 'react';
import Slider from 'react-slick'
import {Link} from 'react-router'
import ImageLoader from 'react-imageloader';

class Items extends Component {
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
			slidesToScroll: 1,
			responsive : [
				{
					breakpoint: 1600,
      		settings: {
      			slidesToShow: 6,
      		}
				},
				{
					breakpoint: 1200,
      		settings: {
      			slidesToShow: 5,
      		}
				},
				{
					breakpoint: 900,
      		settings: {
      			slidesToShow: 4,
      		}
				},
				{
					breakpoint: 700,
      		settings: {
      			slidesToShow: 3,
      		}
				}
			]
		}
		const items = this.state.items.items
		return (
			<ul>
				<Slider {...oSettings} className="items-slider">
					{items.map((item,index) => {
						return (
							<li key={index}>
								<Link to={{ pathname: `/${item.type}s/${item.id}`}}>
									<div className="item">
										<ImageLoader
											src={item.img}>
										</ImageLoader>
										<h2 className="item-title">{item.name}</h2>
										<h3 className="item-categories">{item.type}</h3>
									</div>
								</Link>
							</li>
						)
					})}
				</Slider>
			</ul>
		)
	}
}

export default Items;