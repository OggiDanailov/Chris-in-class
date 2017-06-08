class DestinationsController < ApplicationController

	def index
		render json: Destination.all
	end

	def create
		p params[:data]
		Destination.create(destination_params)
		render json: Destination.all
	end


	private

	def destination_params
		params.require(:destination).permit(:name, :description, :img_url)
	end


end
