class SessionsController < ApplicationController

     def index
          if session[:user_id]
               user = User.find(session[:user_id])
               render json: user
          else 
               render json: {message: "You are not logged in."}
          end
     end

     def create
          user = User.find_by_email(params[:email])
          if user. present? && user.authenticate(params[:password])
               session[:user_id] = user.id
               render json: user
          else 
               render json: {error: "Invalid Email or Password"}, status: :unprocessable_entity
          end
     end
end
