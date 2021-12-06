class Project < ApplicationRecord
     belongs_to :user, dependent: :destroy
     has_many :lists
end
