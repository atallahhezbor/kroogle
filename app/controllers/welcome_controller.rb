class WelcomeController < ApplicationController

	def index
	end

	def get_response
		query = params[:query]		
		render :json => {
      		:text => query
    	}
	end


	def get_pages
	end

	def get_images
	end

end