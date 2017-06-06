import React, { Component } from 'react';

function Blogs(props) {
	let blogs = props.blogs.map(function(blog) {
	  return(
		  <div onClick={handleSelectBlog}>
			  <div>{blog.title} </div>
			  <div>{blog.content} </div>
		  </div>
  		)

		function handleSelectBlog(event) {
			props.selectBlog(blog.id)
		}
  });
 	return <div>{blogs}</div>

}

export default Blogs
