class RelationshipsController < ApplicationController
  before_action :authenticate_member!

  def create
    @member = Member.find(params[:followed_id])
    current_member.follow(@member)
    respond_to do |format|
      format.html { redirect_to user_path(id: @member.id) }
      format.js { render 'create' }
    end
  end

  def destroy
    @member = Member.find(params[:id])
    current_member.unfollow(@member)
    respond_to do |format|
      format.html { redirect_to user_path(id: @member.id) }
      format.js { render 'destroy' }
    end
  end
end
