class Category < ApplicationRecord
  has_many :parts
  has_many :cars, through: :parts
end
