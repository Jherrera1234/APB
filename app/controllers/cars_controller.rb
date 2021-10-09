class CarsController < ApplicationController
  before_action :set_car, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]
  # GET /cars
  def index
    @cars = Car.all

    render json: @cars
  end

  # GET /cars/1
  def show
    render json: @car, include: :categories
  end

  # POST /cars
  def create
    @car = Car.new(car_params)
    @car.user = @current_user
    @categories = Category.all
   
    if @car.save
      # @car.categories << @categories
      render json: @car, status: :created
    else
      render json: @car.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cars/1
  def update
    if @car.update(car_params)
      render json: @car
    else
      render json: @car.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cars/1
  def destroy
    @car.destroy
  end

  # def show_car_categories
  # @car = Car.find(params[:id])
  # @categories=Category.find(params[:category_id])
  # # @car << @categories
  # render json: @car, includes: {:parts => { include: :categories}}

  # end

  # def car_categories
  #   @car = Car.find(params[:car_id])
  #   @category=Category.find(params[:id])
  #   # @category.cars = @car
  #   @car.categories = @category
    
  #   render json: @car, include: :categories
    
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_car
      @car = Car.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def car_params
      params.require(:car).permit(:make, :model, :img_url, :year, :categories)
    end
end
