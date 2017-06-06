class BlogsController < ApplicationController

  def index
	  render json: Blog.all
  end

  def show
    selected_blog = Blog.find(params[:id])
    returning_object = {
      blog: selected_blog,
      comments: selected_blog.comments
    }
    render json: returning_object
  end

end
