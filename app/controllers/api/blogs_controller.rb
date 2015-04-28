module Api
  class BlogsController < ApplicationController

    def create
      @blog = current_user.blogs.new(blog_params)

      if @blog.save
        render json: @blog
      else
        render json: @blog.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @blog = current_user.blogs.find(params[:id])
      @blog.try(:destroy)
      render json: {}
    end

    def index
      if (params[:all])
        @blogs = Blog.all
      else
        @blogs = current_user.blogs
      end
      render json: @blogs
    end

    def show
      @blog = Blog.find(params[:id])

      if @blog
        render :show
      else
        render json: @blog.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @blog = Blog.find(params[:id])

      if @blog.update(blog_params)
        render :show
      else
        render json: @blog.errors.full_messages, status: :unprocessable_entity
      end
    end

    private
    def blog_params
      params.require(:blog).permit(:title)
    end

  end
end
