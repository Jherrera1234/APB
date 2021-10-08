class CategoriesController < ApplicationController
  def index
    @categories = Category.all

    render json: @categories
  end

  # GET /categories/1
  def show
    @category= Category.find(params[:id])
    
    render json: @category, include: :parts
  end
  def car_categories
    # @car = Car.find(params[:car_id])
    @part = Part.where(car_id: @car.id)
    @category=Category.find(params[:id])
    # @category.cars = @car
    @car = Car.find(params[:car_id])
     @car.categories
    @category.cars = @car
    
    render json: @category
    
  end
  
 
  

end
