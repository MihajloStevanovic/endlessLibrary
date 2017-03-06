import React, { Component } from 'react';
import EslNav from '../components/EslNav';

class EslFiche extends Component {
	constructor(props) {
		super(props)
    this.state = {
      "name": "film name",
      "category": "film catogory",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ipsa, magni incidunt distinctio dignissimos error dolorum saepe ad repudiandae maiores, voluptatum dolorem itaque voluptates qui dolore officia minus nemo illum.",
      likes: 0,
      views: 4
    }
    this.handleLike = this.handleLike.bind(this)
    this.handleView = this.handleView.bind(this)
	}
  /*
   * Increment media likes number
   */
  handleLike() {
    console.log("j'aime")
    const likes = this.state.likes
    const newValue= likes + 1
    this.setState({likes: newValue})
    console.log(likes)
  }
  /*
   * Increment media view number
   */
  handleView() {
    console.log("j'ai vu")
    const views = this.state.views
    const newValue= views + 1
    this.setState({views: newValue})
    console.log(views)
  }
  /*
   * Component render
   */
  render() {
    return (
      <div className="Fiche">
        <EslNav />
        <div><img src={this.state.img} alt="" /></div>
      	<h2>{this.state.name}</h2>
        <h3>{this.state.category}</h3>
        <p>{this.state.desc}</p>
        <div><span>{this.state.likes}</span> | <span>{this.state.views}</span></div>
        <div>
          <button onClick={this.handleLike}>Jaime</button>
          <button onClick={this.handleView}>Jai vu</button>
        </div>
      </div>
    );
  }
}

export default EslFiche;
