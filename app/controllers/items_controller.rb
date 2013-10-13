class ItemsController < ApplicationController
  before_filter :signed_in_user

  def create
    @item = Item.new(params[:item])

    if @item.save
      redirect_to item_path(@item.id)
    else
      render 'index'
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy

    if @item.parent_id.nil?
	  redirect_to items_path
	else
	  redirect_to item_path(@item.parent_id)
	end
  end

  def edit
    @items = Item.top_level
    @item = Item.find(params[:id])
  end

  def index
    @items = Item.top_level
  end

  def new
    @items = Item.top_level
  end

  def show
    @items = Item.top_level
    @item = Item.find(params[:id])
    @children = @item.children
    @emails = Email.all
  end

  def update
    @item = Item.find(params[:id])

    if @item.update_attributes(params[:item])
      redirect_to @item
    else
      render 'edit'
    end
  end 
  
  def tick_box
	@item = Item.find(params[:id])
	@item.complete = !@item.complete
	@item.save
	
	redirect_to @item
  end
  
  def tick_child_box
	@item = Item.find(params[:id])
	@item.complete = !@item.complete
	@item.save
	
	if @item.parent_id.nil?
	  redirect_to items_path
	else
	  redirect_to item_path(@item.parent_id)
	end
  end
end
