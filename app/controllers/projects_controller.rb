class ProjectsController < ApplicationController
     def show
          user = User.find_by!(id: params[:id])
          projects = user.projects
          render json: projects
     end

end
