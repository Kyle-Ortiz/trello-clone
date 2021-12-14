class ProjectsController < ApplicationController
     def show
          user = User.find_by!(id: params[:id])
          projects = user.projects
          render json: projects
     end

     def create 
          user = User.find_by!(id: params[:user_id])
          if user 
               user.projects.create!(name: params[:project_name])
               render json: user.projects
          end
     end
end
