class ProjectsController < ApplicationController
     def show
          user = User.find_by!(id: params[:id])
          projects = user.projects
          render json: projects
     end

     def index
          projects = Project.where(user_id: params[:user_id])
          render json: projects, status: :ok
     rescue ActiveRecord::RecordInvalid => invalid
          render json: {error: invalid.record.errors}, status: :unprocessable_entity
     end


     def create 
          user = User.find_by!(id: params[:user_id])
          if user 
               user.projects.create!(name: params[:name])
               render json: user.projects.last, status: :created
          end
     end

     def destroy
          project = Project.find_by(id: params[:id])
          if project 
            project.destroy
            render json: project, status: :ok
          else 
               render json: {error: 'Project not found'}, status: :unprocessable_entity
          end
     end
end
