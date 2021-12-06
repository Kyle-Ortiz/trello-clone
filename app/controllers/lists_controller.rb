class ListsController < ApplicationController
     def index 
        lists = List.order(position: :asc)
     end
end
