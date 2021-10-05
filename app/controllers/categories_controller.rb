class CategoriesController < ApplicationController
  def index
    @categories = Category.all

    render json: @categories
  end

  # GET /categories/1
  def show
    render json: @category, includes: :parts
  end

end
