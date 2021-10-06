class Car < ApplicationRecord
  belongs_to :user
  has_many :parts
  # has_and_belongs_to_many :categories
end
