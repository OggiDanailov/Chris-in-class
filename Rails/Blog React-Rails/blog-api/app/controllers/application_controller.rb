class ApplicationController < ActionController::API

	before_action :get_current_user

	def get_current_user
		current_user = User.find(session[:user_id]) if session[:user_id]
	end

end
