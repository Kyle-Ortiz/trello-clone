class UsersController < ApplicationController
     def create
          user = User.create(username: params[:username], 
          email: params[:email], password: params[:password])
          if user.valid?
               render json: user
          else 
               render json: user.errors.full_messages, status: :unprocessable_entity
          end
     end
end
