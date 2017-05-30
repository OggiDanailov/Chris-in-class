before do
	# if session[:user_id]
	# 	@current_user = User.find(session[:user_id])
	# else
	# 	redirect "/" if request.env["PATH_INFO"] != "/"
	# end

		@current_user = User.find(session[:user_id]) if session[:user_id]
end

get '/' do
	erb :login
end

post '/login' do
	user = User.where(username: params[:username]).first
	if user.password == params[:password]
		flash[:notice] = "Successfully Signed In."
		session[:user_id] = user.id
		redirect '/profile'
	else
		redirect '/'
	end
end

post '/signup' do
	user = User.new(username: params[:username], password: params[:password])
	if user.save
		redirect '/profile'
	else
		flash[:error] = user.errors.full_messages
		redirect '/'
	end
end

post '/logout' do
	session[:user_id] = nil
	redirect '/'
end

get '/profile' do
	@blogs = @current_user.blogs
	erb :index
end

post '/profile' do
	title_from_params = params[:title]
	content_from_params = params[:content]
	Blog.create(title: title_from_params, content: content_from_params, user_id: user.id)
	redirect '/profile'
end

get '/blog/:id' do
	@current_user = User.find(session[:user_id]) if session[:user_id]
	@blog = Blog.find(params[:id])
	erb :blog
end

post '/comments' do
	blog_id = params[:blog_id]
	Comment.create(params[:comment])
	redirect "/blog/#{blog_id}"
end

put '/profile' do
	user.update(params[:user])
	redirect '/profile'
end

delete '/profile' do
	user.destroy
	redirect '/'
end





#
