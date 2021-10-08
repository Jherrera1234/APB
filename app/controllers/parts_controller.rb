class PartsController < ApplicationController
  before_action :set_part, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]
  # GET /parts
  def index
    @parts = Part.all

    render json: @parts
  end

  # GET /parts/1
  def show
    render json: @part
  end

  # POST /parts
  def create
    @part = Part.new(part_params)
    # @user = @current_user

    if @part.save
      render json: @part, status: :created
    else
      render json: @part.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /parts/1
  def update
    if @part.update(part_params)
      render json: @part
    else
      render json: @part.errors, status: :unprocessable_entity
    end
  end

  # DELETE /parts/1
  def destroy
    @part.destroy
  end

  def add_part_car_categories
    @car = Car.find(params[:car_id])
    @category=Category.find(params[:id])
    @part = Part.new(part_params)
    @part.category = @category
    @part.car = @car
  
    if @part.save
      render json: @part, status: :created
    else
      render json: @part.errors, status: :unprocessable_entity
    end
  end

  def car_categories
    # @car = Car.find(params[:car_id])
    # @category=Category.find(params[:id])
    # @part = Part.find {|i| i.car_id == params[:car_id] and i.category_id == params[:id]}
    # @category.cars = @car
    @car = Car.find(params[:car_id])
    @car.categories 
     @category = Category.find(params[:category_id])
     @part = Part.where( category_id:  @category.id ,car_id:  @car.id  )
    
    render json:  @part, include: :category
    
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_part
      @part = Part.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def part_params
      params.require(:part).permit(:name, :price, :description, :img_url, :rating, :category_id, :car_id)
    end
end
