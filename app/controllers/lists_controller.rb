class ListsController < ApplicationController
     def index 
        lists = List.order(position: :asc)
     end

     def create 
         new_list = List.create!(name: params[:name])
     end
end