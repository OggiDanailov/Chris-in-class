import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Blogs from './Blogs'
import Blog from './Blog'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        blogs: []
    }

    this.selectBlog = this.selectBlog.bind(this);
    this.backToBlogs = this.backToBlogs.bind(this);

    axios.get("/blogs").then(function(response) {
        this.setState({blogs: response.data})
    }.bind(this))
  }

  render() {

      if (this.state.selectedBlog) {

          return(
              <div>
                  <Blog data={this.state.selectedBlog} backToBlogs={this.backToBlogs} />
              </div>
          )
      }

    return (
      <div className="App">
          <Blogs blogs={this.state.blogs} selectBlog={this.selectBlog} backToBlogs={this.backToBlogs} />
      </div>
    );
  }

  backToBlogs() {
      this.setState({selectedBlog: null})
  }

  selectBlog(id) {
      axios.get(("/blogs/" + id)).then(function(response) {
          this.setState({selectedBlog: response.data})
          console.log(response.data);
    }.bind(this));
  }
}

export default App;
