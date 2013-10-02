class ItemsController < ApplicationController
  before_filter :signed_in_user

  def index
    @items = Item.all
  end

  #for an item at the top
  def show
    @main_item = Item.find(params[:id]) #top item
    @children = @main_item.children
  end
end
