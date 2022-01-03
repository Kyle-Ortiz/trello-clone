class ListsController < ApplicationController
     def index 
        lists = Project.find_by!(id: params[:project_id]).lists
        render json: lists.to_json(:only => [:id, :name, :position],:include => :cards)
     end

     def create 
         project = Project.find(params[:project_id])
         project.lists.create!(name:params[:name])
         render json: project.lists
     end

end