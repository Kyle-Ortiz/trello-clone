class Project < ApplicationRecord
     belongs_to :user, dependent: :destroy #maybe not??
     has_many :lists
end
