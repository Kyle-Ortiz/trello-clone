class CardSerializer < ActiveModel::Serializer
  attributes :id, :name, :position
  has_one :list
end
