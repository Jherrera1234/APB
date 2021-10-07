class Car < ApplicationRecord
  belongs_to :user
  has_many :parts
  has_many :categories, through: :parts
end
