module Api
  class TagsController < ApplicationController

    def create
      @tag = Tag.new(tag_params)

      if @tag.save
        render json: @tag
      else
        render json: @tag.errors.full_messages, status: :unprocessable_entity
      end
    end

    def index
      @tags = Tag.all
      render json: @tags
    end

    def show
      @tag = Tag.find(params[:id])
      if @tag
        render json: @tag, include: :posts
      else
        render json: @tag.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @tag = Tag.find(params[:id])
      @tag.destroy!
      render json: {}
    end

    private
    def tag_params
      params.require(:tag).permit(:label)
    end


  end
end
