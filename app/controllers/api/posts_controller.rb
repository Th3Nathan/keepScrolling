class Api::PostsController < ApplicationController

  def index
    # @posts = Post.all
  end

  def create
    # @post = Post.create(post_params)
    # if @post.save
    #   render :show
    # else
    #   render(
    #   json: @post.errors.full_messages,
    #   status: 401
    #   )
  end

  def destroy

  end

  def edit

  end

  def update

  end

  def show

  end

  def new

  end

  private
  def post_params
    params.require(:post).permit(
    :title, :author_id, :body, :photo_url, :link_url, :summary, :audio_url,
    :video_url, :quote_url, :source)
  end


end
