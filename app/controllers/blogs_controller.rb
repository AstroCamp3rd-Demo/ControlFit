class BlogsController < ApplicationController
  def index
    @blogs = Blog.all
  end

  def new
    @blog = Blog.new
  end

  def create
    @blog = Blog.new(blog_params)
    if @blog.save
      redirect_to blog_path, notice:'新增成功'
    else
      render new_blog_path, notice:'新增失敗'
    end
  end

  private

  def blog_params
    params.require(:blog).permit(:title, :area)
  end
end
