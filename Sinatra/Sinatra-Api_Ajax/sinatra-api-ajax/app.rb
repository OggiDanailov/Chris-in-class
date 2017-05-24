user = Userget '/' do
	erb :index
end

get '/search' do
	erb :search
end

post '/books' do
	book = Book.create(title: params[:title], author: params[:author], user_id: session[:user_id])
	book.to_json
end

get '/books' do
    books = Book.where(user_id: session[:user_id])
    books.to_json
end

post '/signin' do
	user = User.where(username: params[:username]).first
	if user.password == params[:password]
		flash[:notice] = "Successfully Signed In"
		session[:user_id] = user.id
		redirect '/search'
	else
		flash[:error] = "Wrong password. 2 tries remaining."
		redirect '/'
	end

end

post '/signup' do
	user = User.new(params[:user])
	if user.save
		flash[:notice] = "Successfully Created New User"
		session[:user_id] = user.id
		redirect '/search'
	else
		flash[:error] = user.errors.full_messages
		redirect '/'
	end

end






#
