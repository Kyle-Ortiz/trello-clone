class CardsController < ApplicationController
     def index
          all_cards = Card.all
          render json: all_cards
     end

     def show
          lists = List.where(project_id: params[:id])
          cards = []
          lists.each do |list|
               cards << Card.where(list_id: list.id)
          end
          byebug
          render json: cards
     end

     def create
          card = Card.create!(list_id: params[:list_id], name: params[:name])

          if card 
               render json: card
          else 
               render json: card.errors
          end

     end
end
