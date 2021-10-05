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
    @part.user = @current_user

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

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_part
      @part = Part.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def part_params
      params.require(:part).permit(:make, :model, :img_url, :year)
    end
end
