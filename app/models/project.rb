class Project < ApplicationRecord
     belongs_to :user #maybe not??
     has_many :lists
     validates :name, presence: true
     validates :user_id, presence: true
end
