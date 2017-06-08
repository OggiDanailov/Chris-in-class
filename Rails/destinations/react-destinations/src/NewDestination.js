import React, { Component } from 'react';
import axios from 'axios';


class NewDestination extends Component {

	constructor(props) {
		super(props);
		this.state = {
			newTitle: "",
			newDescription: "",
			newImg: ""
		}

		this.updateTitle = this.updateTitle.bind(this);
		this.updateDescription = this.updateDescription.bind(this);
		this.updateImg = this.updateImg.bind(this);
		this.createDestination = this.createDestination.bind(this);
	}


	render() {

		return(
			<div>
				<div>New Name</div>
				<input type="text" value={this.state.newTitle} onChange={this.updateTitle}/>
				<div>New Description</div>
				<input type="text" value={this.state.newDescription} onChange={this.updateDescription}/>
				<div>New Image</div>
				<input type="text" value={this.state.newImg} onChange={this.updateImg} />
				<button onClick={this.createDestination}>Create Destination</button>
			</div>
		)

	}

	createDestination() {
		axios.post("/destinations", {
			destination: {
				name: this.state.newTitle,
				description: this.state.newDescription,
				img_url: this.state.newImg
			}
		}).then(function(response) {
			this.props.updateDestinations(response.data)
		}.bind(this))
	}

	updateTitle(event) {
		this.setState({newTitle: event.target.value})
	}

	updateDescription(event) {
		this.setState({newDescription: event.target.value})
	}

	updateImg(event) {
		this.setState({newImg: event.target.value})
	}


}

export default NewDestination;
