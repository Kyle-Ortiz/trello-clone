class ListSerializer < ActiveModel::Serializer
     attributes :id, :name, :position
     has_many :cards
end