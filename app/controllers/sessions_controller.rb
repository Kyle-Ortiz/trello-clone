class SessionsController < ApplicationController

     def create
          user = User.find_by_email(params[:email])
          byebug
          if user.authenticate(params[:password])
               session[:user_id] = user.id
               render json: user
          else 
               render json: {error: "Failed to Log in"}
          end
     end

end
