class ItemsController < ApplicationController
  before_filter :signed_in_user

  def edit
    @items = Item.all
    @item = Item.find(params[:id])
  end

  def index
    @items = Item.all
  end

  #for an item at the top
  def show
    @items = Item.all
    @item = Item.find(params[:id]) #top item
    @children = @item.children
  end

  def new
    @items = Item.all
  end

  def create
    @item = Item.new(params[:item])

    if @item.save
      redirect_to item_path(@item.id)
    else
      render 'index'
    end
  end

  def update
    @item = Item.find(params[:id])

    if @item.update_attributes(params[:item])
      redirect_to @item
    else
      render 'edit'
    end
  end 
end
