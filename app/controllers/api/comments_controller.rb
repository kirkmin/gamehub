module Api
  class CommentsController < ApplicationController

    def create
      @comment = current_user.comments.new(comment_params)

      if @comment.save
        render json: @comment
      else
        render json: @comment.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @comment = current_user.comments.find(params[:id])
      @comment.try(:destroy)
      render json: {}
    end

    def index
      if (params[:all])
        @posts = Posts.all
      else
        @posts = Posts.where(parent_type: params[:parent_type], parent_id: params[:parent_id])
      end
      render json: @posts
    end

    private
    def comment_params
      params.require(:comment).permit(:user, :parent, :body)
    end
  end
end
