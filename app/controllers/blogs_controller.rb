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
      redirect_to blogs_path, notice:'新增成功'
    else
      render :new, notice:'新增失敗'
    end
  end

  def edit
    @blog = Blog.find(params[:id])
  end

  def update
    @blog = Blog.find(params[:id])
    if @blog.update(blog_params)
      redirect_to blogs_path, notice:'更新成功'
    else
      render :edit, notice:'更新失敗'
    end
  end

  def destroy
    @blog = Blog.find(params[:id])
    if @blog.destroy
      redirect_to blogs_path
    end
  end
  private

  def blog_params
    params.require(:blog).permit(:title, :area)
  end
end
