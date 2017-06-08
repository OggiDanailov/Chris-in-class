import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import NewDestination from './NewDestination';

class App extends Component {

  constructor() {
    super();
    this.state = {
      destinations: []
    }

    axios.get("/destinations").then(function(response) {
      this.setState({destinations: response.data});
    }.bind(this));

	this.updateDestinations = this.updateDestinations.bind(this);

  }

  render() {

    let destinations = this.state.destinations.map(function(destination) {
      return(
        <div>
			<img src={destination.img_url} width="400" height= "300" alt=""/>
			<h2>{destination.name}</h2>
			<div>{destination.description}</div>
			<br />
        </div>
      )
    })

    return (
      <div className="App">
		  <div>{destinations}</div>
		  <NewDestination updateDestinations={this.updateDestinations} />
		  <br />
      </div>
    );
  }

  updateDestinations(newDestinations) {
	  
	  this.setState({destinations: newDestinations})
  }
}

export default App;
