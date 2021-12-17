class List < ApplicationRecord
     acts_as_list scope: :project_id
     has_many :cards, ->{ order(position: :asc) }, dependent: :destroy
     belongs_to :project, dependent: :destroy
     validates :name, presence: true
     validates :project_id, presence: true

     # def cards 
     #      cards = Card.where(list_id: self.id)
     #      cards
     # end
end
