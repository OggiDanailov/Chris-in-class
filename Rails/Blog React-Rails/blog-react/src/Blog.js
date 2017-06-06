import React, { Component } from 'react';

function Blog(props) {
	let comments = props.data.comments.map(function(comment) {
	  return <div>{comment.content}</div>
	})

	return(
		<div>
			<button onClick={handleChangeView}>Back to Blogs</button>
			<div>{props.data.blog.title}</div>
			<div>{props.data.blog.content}</div>
			<h2>Comments:</h2>
   			 <div>{comments}</div>
		</div>
	)

	function handleChangeView() {
		props.backToBlogs();
	}



}

export default Blog;
