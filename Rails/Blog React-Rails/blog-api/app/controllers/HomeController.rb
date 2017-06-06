class HomeController < ApplicationController

	def sign_in
		user = User.where(username: params[:username]).first
		if user.password == params[:password]
			session[:user_id] = user.id
		end
	end

end
