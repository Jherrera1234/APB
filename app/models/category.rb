class Category < ApplicationRecord
  has_many :parts
  has_and_belongs_to_many :cars
end
