class ProjectsController < ApplicationController
     def show
          projects = Project.find_by_user_id(params[:user_id])
          render json: projects
     end
end
