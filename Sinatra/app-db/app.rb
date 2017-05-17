require 'sinatra'
require 'sinatra/activerecord'

set :database, 'sqlite3:firstdb.sqlite3'

require './models'

get '/' do

	@blogs = Blog.all
	@blogs = Blog.where(category: params[:search]) if params[:search]

	# if params[:search]
	# 	@blogs =  Blog.where(category: params[:search])
	# else
	# 	@blogs = Blog.all
	# end

	# params[:search] ? @blogs =  Blog.where(category: params[:search]) : @blogs = Blog.all

	erb :index
end

post '/new_blog' do
	Blog.create(title: params[:title], category: params[:category], content: params[:content])
	redirect "/"
end
