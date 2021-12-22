class ListsController < ApplicationController
     def index 
        project = Project.find(params[:project_id])
        lists = project.lists
        render json: lists.includes(:cards)
     end

     def create 
         project = Project.find(params[:project_id])
         project.lists.create!(name:params[:name])
         render json: project.lists
     end

end