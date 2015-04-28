module Api
  class PostsController < ApplicationController

    wrap_parameters :post, include: [
      :tag_string,
      :title,
      :body,
      :file_url,
      :blog_id
    ]

    def create
      @post = current_user.posts.new(post_params)

      if @post.save
        render json: @post
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @post = current_user.posts.find(params[:id])
      @post.destroy!
      render json: {}
    end

    def index
      if (params[:all])
        @posts = Posts.all
      else
        @posts = Posts.where(blog_id: params[:blog_id])
      end
      render json: @posts
    end

    def show
      @post = Post.find(params[:id])

      if @post
        render json: @post, include: :tags
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @post = Post.find(params[:id])
      if @post.update(post_params)
        render json: @post
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end

    private
    def post_params
      params.require(:post).permit(
        :title,
        :body,
        :file_url,
        :blog_id,
        :tag_string
      )
    end
  end
end
