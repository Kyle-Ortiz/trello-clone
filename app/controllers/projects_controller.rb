class ProjectsController < ApplicationController
     def show
          projects = Project.find_by_user_id(current_user.id)


          render json: projects
     end
end
